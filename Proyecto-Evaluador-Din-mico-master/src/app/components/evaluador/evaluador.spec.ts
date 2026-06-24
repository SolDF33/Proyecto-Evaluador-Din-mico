import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evaluador } from './evaluador';

describe('Evaluador', () => {
  let component: Evaluador;
  let fixture: ComponentFixture<Evaluador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Evaluador],
    }).compileComponents();

    fixture = TestBed.createComponent(Evaluador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
