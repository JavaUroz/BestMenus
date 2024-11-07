import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentSearchesPageComponent } from './pages/recent-searches-page/recent-searches-page.component';

const routes: Routes = [
  {
    path: '',
    component: RecentSearchesPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentSearchRoutingModule { }
