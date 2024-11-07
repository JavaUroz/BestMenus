import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { FavoritesService } from '@modules/history/services/favorites.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.css'
})
export class FavoritePageComponent implements OnInit{  
  favoriteRecipes: RecipeModel[] = []

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.getFavorites()
    this.favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')||'[]')
    console.log(this.favoriteRecipes)
  }
}

