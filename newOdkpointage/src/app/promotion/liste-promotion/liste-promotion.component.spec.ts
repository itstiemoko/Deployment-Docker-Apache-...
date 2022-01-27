import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePromotionComponent } from './liste-promotion.component';

describe('ListePromotionComponent', () => {
  let component: ListePromotionComponent;
  let fixture: ComponentFixture<ListePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
