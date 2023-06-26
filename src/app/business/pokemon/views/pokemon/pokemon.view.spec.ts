import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonView } from './pokemon.view';

describe('PokemonComponent', () => {
  let component: PokemonView;
  let fixture: ComponentFixture<PokemonView>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonView]
    });
    fixture = TestBed.createComponent(PokemonView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
