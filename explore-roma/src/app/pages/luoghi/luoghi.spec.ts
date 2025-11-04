import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Luoghi } from './luoghi';

describe('Luoghi', () => {
  let component: Luoghi;
  let fixture: ComponentFixture<Luoghi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Luoghi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Luoghi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
