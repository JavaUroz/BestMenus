import { Component, Input } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {
  @Input() title: string = ''
  @Input() dataRecipes: Array<RecipeModel> = []

  constructor() {

  }

  addRecipe(): void {
    
  }
}
