import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVideojuegoComponent } from './agregar-videojuego.component';

describe('AgregarVideojuegoComponent', () => {
  let component: AgregarVideojuegoComponent;
  let fixture: ComponentFixture<AgregarVideojuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarVideojuegoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
