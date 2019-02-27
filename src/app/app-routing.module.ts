import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'schools',
    loadChildren: './modules/schools/schools.module#SchoolsModule'
  },
  {
    path: 'skills',
    loadChildren: './modules/skills/skills.module#SkillsModule'
  },
  {
    path: 'preferences',
    loadChildren: './modules/preferences/preferences.module#PreferencesModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
