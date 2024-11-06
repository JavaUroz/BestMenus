import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';

@Component({
  selector: 'app-recipes-list-body',
  templateUrl: './recipes-list-body.component.html',
  styleUrl: './recipes-list-body.component.css'
})
export class RecipesListBodyComponent implements OnInit{
  @Input() recipes: Array<RecipeModel> = []
  optionSort:{property:string | null, order: string} = {property: null, order: 'asc'}

  constructor() { }

  ngOnInit(){

  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort)
  }
}
