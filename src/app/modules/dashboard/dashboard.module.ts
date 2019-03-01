import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { DashboardMyClassComponent } from './components/dashboard-my-class/dashboard-my-class.component';
import { DashboardMySkillsComponent } from './components/dashboard-my-skills/dashboard-my-skills.component';

@NgModule({
  declarations: [DashboardComponent, DashboardNavComponent, DashboardMyClassComponent, DashboardMySkillsComponent],
  imports: [
    CommonModule,
    ClarityModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
