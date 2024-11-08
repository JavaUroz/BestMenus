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
  isEditMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private settingService: SettingService, 
    private dialogRef: MatDialogRef<AddRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.recipeForm = this.formBuilder.group({
      _id: '',
      name: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: ['', Validators.required],
      ingredients: this.formBuilder.array([])
    });

    if (data && data.recipe) {
      this.isEditMode = true;
      this.setFormValues(data.recipe);
    }
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    const ingredientForm = this.formBuilder.group({
      amount: ['', Validators.required],
      name: ['', Validators.required]
    });
    this.ingredients.push(ingredientForm);
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  setFormValues(recipe: RecipeModel) {
    this.recipeForm.patchValue({
      _id: recipe._id,
      name: recipe.name,
      description: recipe.description,
      imagePath: recipe.imagePath
    });


    if (recipe.ingredients && recipe.ingredients.length > 0) {
      recipe.ingredients.forEach(ingredient => {
        this.addIngredient();
        const ingredientForm = this.ingredients.at(this.ingredients.length - 1);
        ingredientForm.patchValue({
          amount: ingredient.amount,
          name: ingredient.name
        });
      });
    }
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const recipeData: RecipeModel = this.recipeForm.value;
      if (this.isEditMode) {
        this.editRecipe(recipeData, recipeData._id);
      } else {
        this.createRecipe(recipeData);
      }
    }
  }

  createRecipe(recipe: RecipeModel) {
    this.settingService.createRecipe(recipe).subscribe(
      (response) => {
        alert('New recipe added!')
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error while adding a new recipe!', error);
      }
    );
  }

  editRecipe(recipe: RecipeModel, id: string) {
    this.settingService.editRecipe(recipe, id).subscribe(
      (response) => {
        alert('Recipe updated successfully.');
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error while updating a recipe!', error);
      }
    );
  }

  close() {
    this.dialogRef.close();
  }
}