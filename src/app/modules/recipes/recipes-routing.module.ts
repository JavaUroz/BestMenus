import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesPageComponent } from '@modules/recipes/pages/recipes-page/recipes-page.component';
import { AddRecipeComponent } from '@modules/recipes/components/add/add-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesPageComponent,
    outlet: 'child'
  },
  {
    path: 'add',
    component: AddRecipeComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
