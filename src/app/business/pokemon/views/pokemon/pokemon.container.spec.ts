import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonContainerComponent } from './pokemon.container';

describe('PokemonContainerComponent', () => {
  let component: PokemonContainerComponent;
  let fixture: ComponentFixture<PokemonContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonContainerComponent]
    });
    fixture = TestBed.createComponent(PokemonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
