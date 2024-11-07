import { Injectable } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  public favoriteRecipes$: BehaviorSubject<any> = new BehaviorSubject([])
  
  constructor() {}

  getFavorites(): RecipeModel[] {
    let savedFavorites = localStorage.getItem('favoriteRecipes')
    console.log(savedFavorites)
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  }

  updateFavorites(favorites: RecipeModel[]): void {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    this.favoriteRecipes$.next(favorites);
  }
}
