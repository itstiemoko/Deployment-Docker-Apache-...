import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogParUtilisateurComponent } from './log-par-utilisateur.component';

describe('LogParUtilisateurComponent', () => {
  let component: LogParUtilisateurComponent;
  let fixture: ComponentFixture<LogParUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogParUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogParUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
