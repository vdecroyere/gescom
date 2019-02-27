import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMySkillsComponent } from './dashboard-my-skills.component';

describe('DashboardMySkillsComponent', () => {
  let component: DashboardMySkillsComponent;
  let fixture: ComponentFixture<DashboardMySkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMySkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
