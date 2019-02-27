import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardMyClassComponent } from './components/dashboard-my-class/dashboard-my-class.component';
import { DashboardMySkillsComponent } from './components/dashboard-my-skills/dashboard-my-skills.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'myclass',
    component: DashboardMyClassComponent
  },
  {
    path: 'myskills',
    component: DashboardMySkillsComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
