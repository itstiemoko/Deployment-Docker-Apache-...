import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPointageComponent } from './detail-pointage.component';

describe('DetailPointageComponent', () => {
  let component: DetailPointageComponent;
  let fixture: ComponentFixture<DetailPointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPointageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
