import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentSearchRoutingModule } from './recent-searches-routing.module';
import { SearchComponent } from './components/search/search.component';
import { RecentSearchesPageComponent } from './pages/recent-searches-page/recent-searches-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecentSearchesPageComponent,
    SearchComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RecentSearchRoutingModule,
    FormsModule
  ]
})
export class RecentSearchModule { }
