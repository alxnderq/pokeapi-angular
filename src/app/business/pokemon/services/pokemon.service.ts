import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonList } from '../models';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getAllPokemon(offset: number, limit: number): Observable<PokemonList> {
        return this.httpClient.get<PokemonList>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    }

    getPokemon(id_name: number | string): Observable<Pokemon> {
        return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id_name}`);
    };
}
