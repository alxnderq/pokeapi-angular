import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonList } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private API_BASE_URL: string = "https://pokeapi.co/api/v2";

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllPokemon(offset: number, limit: number): Observable<PokemonList> {
    return this.httpClient.get<PokemonList>(`${this.API_BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemon(id_name: number | string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.API_BASE_URL}/pokemon/${id_name}`);
  };
}
