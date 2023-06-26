import { Component } from '@angular/core';
import { Observable, combineLatest, map, switchMap } from 'rxjs';
import { Pokemon, PokemonList, PokemonResult } from '../../models';
import { PokemonService } from '../../services';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon.container.html',
  styleUrls: ['./pokemon.container.scss']
})
export class PokemonContainerComponent {

  pokemonList$!: Observable<Pokemon[]>;

  constructor(
    private pokemonService: PokemonService
  ) {
    this.getPokemonList();
  }

  getPokemonList(offset: number = 0, limit: number = 10): void {
    this.pokemonList$ = this.pokemonService.getAllPokemon(offset, limit)
      .pipe(
        switchMap((data: PokemonList) => {
          const details = data.results.map((i: PokemonResult) => this.pokemonService.getPokemon(i.name));

          return combineLatest([...details]);
        })
      );
  }

}
