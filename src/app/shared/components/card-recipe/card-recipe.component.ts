import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeModel } from '@core/models/recipe.model';
import { SettingService } from '@core/settings/setting.service';
import { AddRecipeComponent } from '@modules/recipes/components/add/add-recipe.component';
import { RecipeDetailModalComponent } from '../recipe-detail/recipe-detail-modal/recipe-detail-modal.component';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrl: './card-recipe.component.css'
})
export class CardRecipeComponent implements OnInit {
  @Input() recipe: RecipeModel = {_id:'0', name:'', description:'', imagePath:''};

  constructor(public dialog: MatDialog, private settingService: SettingService) { }

  ngOnInit(): void {
    
  }

  editRecipe(recipe: RecipeModel) {
    const dialogRef = this.dialog.open(AddRecipeComponent, {
      data: { recipe }  // Pasamos la receta al modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Actualizar la lista de recetas si es necesario
      }
    });
  }

  addToFavorites(recipe: RecipeModel):void{}
  
  deleteRecipe(recipe: RecipeModel) {
    const confirmDelete = confirm('Are you sure you want to delete this recipe?');
    if (confirmDelete) {
      this.settingService.deleteRecipe(recipe._id).subscribe(
        (response) => {
          alert('Recipe deleted successfully!')
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

  viewDetails(recipe: RecipeModel) {
    this.dialog.open(RecipeDetailModalComponent, {
      data: {recipe},
      width: '800px'
    });
  }
}
