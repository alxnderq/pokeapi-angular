import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsView } from '.';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsView;
  let fixture: ComponentFixture<PokemonDetailsView>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailsView]
    });
    fixture = TestBed.createComponent(PokemonDetailsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
