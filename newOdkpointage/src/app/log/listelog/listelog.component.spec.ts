import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelogComponent } from './listelog.component';

describe('ListelogComponent', () => {
  let component: ListelogComponent;
  let fixture: ComponentFixture<ListelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListelogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
