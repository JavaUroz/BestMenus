import { Component } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { RecipeService } from '@shared/services/recipes.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.css'
})
export class RecipesPageComponent {
  recipes: Array<RecipeModel> = []


  constructor(private recipeService: RecipeService, private cookie: CookieService) { 
    
  }

  ngOnInit(): void {
    this.loadDataAll()
  }

  loadDataAll(): void{
    this.recipeService.getRecipes$()
      .subscribe((response: Array<any>) => {
        console.log(response)
        this.recipes = response
    })
  }

  ngOnDestroy(): void {

  }
}

