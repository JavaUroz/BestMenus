import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  RecipesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecipesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class RecipesModule { }
