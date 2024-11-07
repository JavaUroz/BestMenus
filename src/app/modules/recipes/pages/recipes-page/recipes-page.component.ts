import { Component } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { SettingService } from '@core/settings/setting.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.css'
})
export class RecipesPageComponent {
  recipes: Array<RecipeModel> = []


  constructor(private settingService: SettingService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.loadDataAll()
  }

  loadDataAll(): void{
    this.settingService.getRecipes()
      .subscribe((response: Array<any>) => {
        this.recipes = response
    })
  }

  ngOnDestroy(): void {

  }
}

