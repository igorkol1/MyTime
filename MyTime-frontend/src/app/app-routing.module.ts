import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListOfActivityComponent} from './components/list-of-activity/list-of-activity.component';

const routes: Routes = [
  {path: 'activitiesList', component: ListOfActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
