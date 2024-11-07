import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { SettingService } from '@core/settings/setting.service';
import { Observable, of, map } from 'rxjs';

@Component({
  selector: 'app-recent-searches-page',
  templateUrl: './recent-searches-page.component.html',
  styleUrl: './recent-searches-page.component.css'
})
export class RecentSearchesPageComponent {
  results$: Observable<any> = of([])

  constructor(private settingService: SettingService){}

  getData(event: string): void {
    this.results$ = this.settingService.getRecipes().pipe(
      map((recipes: RecipeModel[]) => 
        recipes.filter(recipe => 
          recipe.name.toLowerCase().includes(event.toLowerCase()) ||
          recipe.description.toLowerCase().includes(event.toLowerCase())
        )
      )
    )
  }
}