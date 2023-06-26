import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLayoutComponent } from './pokemon-layout.component';

describe('PokemonLayoutComponent', () => {
  let component: PokemonLayoutComponent;
  let fixture: ComponentFixture<PokemonLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonLayoutComponent]
    });
    fixture = TestBed.createComponent(PokemonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
