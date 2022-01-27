import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogParAdminComponent } from './log-par-admin.component';

describe('LogParAdminComponent', () => {
  let component: LogParAdminComponent;
  let fixture: ComponentFixture<LogParAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogParAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogParAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
