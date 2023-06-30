import { Injectable } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { Pokemon } from "../../models";
import { PokemonService } from "../../services";

@Injectable()
export class PokemonDetailsPresenter {

  pokemon$!: Observable<Pokemon>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemon$ = this.activatedRoute.params
      .pipe(
        switchMap((params: Params): Observable<Pokemon> => this.pokemonService.getPokemon(params["name"]))
      );
  }

}
