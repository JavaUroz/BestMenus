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

  isFavorite: boolean = false;
  constructor(public dialog: MatDialog, private settingService: SettingService) { }

  ngOnInit(): void {
    this.isFavorite = this.checkIfFavorite(this.recipe)
  }

  editRecipe(recipe: RecipeModel) {
    const dialogRef = this.dialog.open(AddRecipeComponent, {
      data: { recipe }
    });  
    dialogRef.afterClosed().subscribe();
  }

  checkIfFavorite(recipe: RecipeModel): boolean {
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    if (savedFavorites) {
      const favorites = JSON.parse(savedFavorites);
      return favorites.some((fav: RecipeModel) => fav._id === recipe._id);
    }
    return false;
  }

  addToFavorites(recipe: RecipeModel):void{
    let favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]')

    const index = favorites.findIndex((find: RecipeModel) => 
      find._id === recipe._id
    )

    if(index === -1){
      favorites.push(recipe)
    } else {
      favorites.splice(index, 1)
    }

    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites))

    this.isFavorite = !this.isFavorite
  }
  
  deleteRecipe(recipe: RecipeModel) {
    const confirmDelete = confirm('Are you sure you want to delete this recipe?');
    if (confirmDelete) {
      this.settingService.deleteRecipe(recipe._id).subscribe(
        (response) => {
          alert('Recipe deleted successfully!')
        },
        (error) => {
          console.error('Error while deleting recipe!', error);
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