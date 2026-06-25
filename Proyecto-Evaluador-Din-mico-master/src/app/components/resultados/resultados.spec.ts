import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Resultados } from './resultados';

describe('Resultados', () => {
  let component: Resultados;
  let fixture: ComponentFixture<Resultados>;

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Resultados],
    }).compileComponents();

    fixture = TestBed.createComponent(Resultados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show no results when notaFinal is not available', () => {
    expect(component.nota).toBeNull();
    expect(component.estado).toBe('Sin datos');
  });
});
