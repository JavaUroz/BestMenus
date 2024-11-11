import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeModel } from '@core/models/recipe.model';
import { AddRecipeComponent } from '@modules/recipes/components/add/add-recipe.component';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {
  @Input() title: string = ''
  @Input() showAddRecipeCard = true;
  @Input() dataRecipes: Array<RecipeModel> = []

  constructor(public dialog: MatDialog) {   
  }
 
  addRecipe(): void {
    this.dialog.open(AddRecipeComponent, {
      width: '800px',
      data: {}
    })
  }
}
