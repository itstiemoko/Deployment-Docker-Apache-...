import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogParSuperAdminComponent } from './log-par-super-admin.component';

describe('LogParSuperAdminComponent', () => {
  let component: LogParSuperAdminComponent;
  let fixture: ComponentFixture<LogParSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogParSuperAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogParSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
