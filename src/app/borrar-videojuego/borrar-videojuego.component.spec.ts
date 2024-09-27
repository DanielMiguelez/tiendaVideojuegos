import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarVideojuegoComponent } from './borrar-videojuego.component';

describe('BorrarVideojuegoComponent', () => {
  let component: BorrarVideojuegoComponent;
  let fixture: ComponentFixture<BorrarVideojuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrarVideojuegoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
