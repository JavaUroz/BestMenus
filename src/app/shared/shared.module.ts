import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { RecipeDetailModalComponent } from './components/recipe-detail/recipe-detail-modal/recipe-detail-modal.component';
import { AddRecipeComponent } from '@modules/recipes/components/add/add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesListBodyComponent } from './components/recipes-list-body/recipes-list-body.component';
import { OrderListPipe } from './pipe/order-list.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    SideBarComponent,
    RecipeDetailModalComponent,
    CardRecipeComponent,
    SectionGenericComponent,
    TruncatePipe,
    OrderListPipe,
    ImgBrokenDirective,
    AddRecipeComponent,
    RecipesListBodyComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    SideBarComponent,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    CardRecipeComponent,
    SectionGenericComponent,
    TruncatePipe,
    OrderListPipe,
    ImgBrokenDirective,
    RecipesListBodyComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
