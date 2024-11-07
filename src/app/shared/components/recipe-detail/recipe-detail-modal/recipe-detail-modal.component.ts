import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RecipeModel } from '@core/models/recipe.model';

@Component({
  selector: 'app-recipe-detail-modal',
  templateUrl: './recipe-detail-modal.component.html',
  styleUrls: ['./recipe-detail-modal.component.css']
})
export class RecipeDetailModalComponent {
  recipe: RecipeModel

  constructor(
    private dialogRef: MatDialogRef<RecipeDetailModalComponent>,

    @Inject(MAT_DIALOG_DATA) public data: { recipe: RecipeModel }) {
    this.recipe = data.recipe
  }

  close() {
    this.dialogRef.close();
  }
}