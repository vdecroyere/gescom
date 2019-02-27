import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsListComponent } from './components/persons-list/persons-list.component';

const routes: Routes = [
  {
    path: 'persons',
    component: PersonsListComponent
  },
  {
    path: '',
    redirectTo: 'persons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferencesRoutingModule { }
