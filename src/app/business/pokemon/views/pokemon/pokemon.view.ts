import { Component } from '@angular/core';
import { PokemonPresenter } from './pokemon.presenter';

@Component({
    selector: 'app-pokemon-view',
    templateUrl: './pokemon.view.html',
    styleUrls: ['./pokemon.view.scss'],
    providers: [PokemonPresenter],
    standalone: false
})
export class PokemonView {

  offset: number;
  defaultLimit: number;
  limit: number;

  constructor(
    protected presenter: PokemonPresenter
  ) {
    this.offset = 0;
    this.defaultLimit = 12;
    this.limit = this.defaultLimit;
  }

  onSearchPokemon(pokemonName: string) {
    this.presenter.onSearchPokemon(pokemonName);
  }

  onSelectedPokemon(name: string) {
    this.presenter.onSelectedPokemon(name);
  }

  onChangedLimit(limit: number): void {
    this.limit = limit;

    this.presenter.getPokemonList(this.offset, this.limit);
  }
}
