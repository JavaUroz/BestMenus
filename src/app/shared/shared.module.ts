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
// import { MediaPlayerComponent } from './components/media-player/media-player.component';
// import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
// import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
// import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
// import { OrderListPipe } from './pipe/order-list.pipe';
// import { ImgBrokenDirective } from './directives/img-broken.directive';

@NgModule({
  declarations: [
    SideBarComponent,
    // MediaPlayerComponent,
    // HeaderUserComponent,
    CardRecipeComponent,
    SectionGenericComponent,
    // PlayListHeaderComponent,
    // PlayListBodyComponent,
    // OrderListPipe,
    // ImgBrokenDirective
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
    MatFormFieldModule
    
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
    // MediaPlayerComponent,
    // HeaderUserComponent,
    CardRecipeComponent,
    SectionGenericComponent,
    // PlayListHeaderComponent,
    // PlayListBodyComponent,
    // OrderListPipe,
    // ImgBrokenDirective
  ]
})
export class SharedModule { }
