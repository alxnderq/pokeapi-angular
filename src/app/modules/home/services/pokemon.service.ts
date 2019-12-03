import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { PokemonList } from '../models/pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly API: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.API = environment.apiURL + environment.apiVersion;
  }

  getPokemonList(): Observable<PokemonList> {
    return this.httpClient.get<PokemonList>(this.API + '/pokemon');
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.API + '/pokemon/' + name);
  }

}
