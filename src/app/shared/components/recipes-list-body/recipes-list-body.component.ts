import { Component, Input } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';

@Component({
  selector: 'app-recipes-list-body',
  templateUrl: './recipes-list-body.component.html',
  styleUrl: './recipes-list-body.component.css'
})
export class RecipesListBodyComponent {
  @Input() recipes: Array<RecipeModel> = []
  optionSort:{property:string | null, order: string} = {property: null, order: 'asc'}

  constructor() { }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}