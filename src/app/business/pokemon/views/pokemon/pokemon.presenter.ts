import {Injectable} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {combineLatest, Observable, of, switchMap} from "rxjs";
import {Pokemon, PokemonList, PokemonResult} from "../../models";
import {PokemonService} from "../../services";

@Injectable()
export class PokemonPresenter {

  pokemonList$!: Observable<Pokemon[]>;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.getPokemonList();
  }

  onSearchPokemon(name: string) {
    this.pokemonList$ = this.getPokemonByName(name.toLowerCase())
      .pipe(
        switchMap((pokemon: Pokemon): Observable<Pokemon[]> => {
          const array: Pokemon[] = [pokemon];
          return of(array);
        })
      );
  }

  getPokemonList(offset: number = 0, limit: number = 12): void {
    this.pokemonList$ = this.pokemonService.getAllPokemon(offset, limit)
      .pipe(
        switchMap((data: PokemonList): Observable<Pokemon[]> => {
          const details: Observable<Pokemon>[] = data.results.map((pokemon: PokemonResult) => this.getPokemonByName(pokemon.name));

          return combineLatest([...details]);
        })
      );
  }

  onSelectedPokemon(name: string) {
    this.router.navigate(['pokemon', name], { relativeTo: this.activatedRoute });
  }

  private getPokemonByName(name: string): Observable<Pokemon> {
    return this.pokemonService.getPokemon(name);
  }

}
