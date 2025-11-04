import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioLuogo } from './dettaglio-luogo';

describe('DettaglioLuogo', () => {
  let component: DettaglioLuogo;
  let fixture: ComponentFixture<DettaglioLuogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioLuogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioLuogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
