import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RecipeModel } from '@core/models/recipe.model';
import { SettingService } from '@core/settings/setting.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  recipeForm: FormGroup;
  isEditMode: boolean = false; // Nueva variable para saber si estamos en modo de edición

  constructor(
    private fb: FormBuilder, 
    private settingService: SettingService, 
    private dialogRef: MatDialogRef<AddRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    // Inicializamos el formulario
    this.recipeForm = this.fb.group({
      _id: '',
      name: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: ['', Validators.required],
      ingredients: this.fb.array([])  // FormArray para los ingredientes
    });

    // Si estamos editando, inicializamos el formulario con los datos de la receta
    if (data && data.recipe) {
      this.isEditMode = true;
      this.setFormValues(data.recipe); // Cargar los valores de la receta en el formulario
    }
  }

  // Acceder a los ingredientes
  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  // Agregar un ingrediente
  addIngredient() {
    const ingredientForm = this.fb.group({
      amount: ['', Validators.required],
      name: ['', Validators.required]
    });
    this.ingredients.push(ingredientForm);
  }

  // Eliminar un ingrediente
  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  // Cargar los valores de la receta en el formulario
  setFormValues(recipe: RecipeModel) {
    this.recipeForm.patchValue({
      _id: recipe._id,
      name: recipe.name,
      description: recipe.description,
      imagePath: recipe.imagePath
    });

    // Cargar los ingredientes en el FormArray
    if (recipe.ingredients && recipe.ingredients.length > 0) {
      recipe.ingredients.forEach(ingredient => {
        this.addIngredient();  // Primero agregamos un nuevo ingrediente al array
        const ingredientForm = this.ingredients.at(this.ingredients.length - 1);
        ingredientForm.patchValue({
          amount: ingredient.amount,
          name: ingredient.name
        });
      });
    }
  }

  // Envio al backend
  onSubmit() {
    if (this.recipeForm.valid) {
      const recipeData: RecipeModel = this.recipeForm.value;
      if (this.isEditMode) {
        console.log(recipeData)
        console.log(recipeData._id)
        this.editRecipe(recipeData, recipeData._id);
      } else {
        this.createRecipe(recipeData);
      }
    }
  }

  // Lógica para crear una receta
  createRecipe(recipe: RecipeModel) {
    this.settingService.createRecipe(recipe).subscribe(
      (response) => {
        console.log('Receta creada', response);
        this.dialogRef.close();  // Cierra el modal
      },
      (error) => {
        console.error('Error al crear la receta', error);
      }
    );
  }

  // Lógica para actualizar una receta
  editRecipe(recipe: RecipeModel, id: string) {
    console.log(id)
    this.settingService.editRecipe(recipe, id).subscribe(
      (response) => {
        console.log('Receta actualizada', response);
        this.dialogRef.close();  // Cierra el modal
      },
      (error) => {
        console.error('Error al actualizar la receta', error);
      }
    );
  }

  // Cerrar el modal
  close() {
    this.dialogRef.close();
  }
}
