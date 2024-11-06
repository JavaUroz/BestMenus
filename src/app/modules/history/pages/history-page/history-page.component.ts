import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { SettingService } from '@core/settings/setting.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {
  results$: Observable<any> = of([])
  constructor(private settingService: SettingService){}

  ngOnInit(): void {
    
  }

  getData(event: string): void {
    console.log(event)
    console.log(this.results$ = this. settingService.getRecipes())
    this.results$ = this. settingService.getRecipes()
  }
}
