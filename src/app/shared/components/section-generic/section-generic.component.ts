import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeModel } from '@core/models/recipe.model';
import { RecipeDetailModalComponent } from '../recipe-detail/recipe-detail-modal/recipe-detail-modal.component'; 

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {
  @Input() title: string = ''
  @Input() dataRecipes: Array<RecipeModel> = []

  constructor(public dialog: MatDialog) {

  }

  viewDetails(recipe: RecipeModel) {
    this.dialog.open(RecipeDetailModalComponent, {
      data: {recipe},
      width: '800px'
    });
  }

  addRecipe(): void {
    
  }
}
