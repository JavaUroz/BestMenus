import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { SettingService } from '@core/settings/setting.service';
import { Observable, of, map } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
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
