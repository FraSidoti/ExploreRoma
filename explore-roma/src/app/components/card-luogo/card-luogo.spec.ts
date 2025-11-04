import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLuogo } from './card-luogo';

describe('CardLuogo', () => {
  let component: CardLuogo;
  let fixture: ComponentFixture<CardLuogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLuogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLuogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
