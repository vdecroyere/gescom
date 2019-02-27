import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMyClassComponent } from './dashboard-my-class.component';

describe('DashboardMyClassComponent', () => {
  let component: DashboardMyClassComponent;
  let fixture: ComponentFixture<DashboardMyClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMyClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMyClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
