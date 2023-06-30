import { Component } from '@angular/core';
import { PokemonPresenter } from './pokemon.presenter';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon.view.html',
  styleUrls: ['./pokemon.view.scss'],
  providers: [PokemonPresenter]
})
export class PokemonView {

  constructor(
    protected presenter: PokemonPresenter
  ) {
  }

  onSearchPokemon(pokemonName: string) {
    this.presenter.onSearchPokemon(pokemonName);
  }

  onSelectedPokemon(name: string) {
    this.presenter.onSelectedPokemon(name);
  }

}
