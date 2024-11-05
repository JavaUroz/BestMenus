import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { RecipeService } from '@shared/services/recipes.service';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrl: './card-recipe.component.css'
})
export class CardRecipeComponent implements OnInit {
  @Input() recipe: RecipeModel = {_id:0, name:'', description:'', imagePath:''};

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    
  }

  addToFavorites(recipe: RecipeModel):void{}
  editRecipe(recipe: RecipeModel):void{}
  deleteRecipe(recipe: RecipeModel):void{}



  // sendRecipe(recipe: RecipeModel):void{
  //   this.recipeService.recipeInfo$.next(recipe)
  // }
}
