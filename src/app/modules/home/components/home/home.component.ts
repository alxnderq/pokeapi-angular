import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  pokemons: Pokemon[];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.getListPokemon();
  }

  getListPokemon() {
    this.pokemonService.getListPokemon()
      .subscribe((result) => {
        console.log(result);
      });
  }

  ngAfterViewInit() {
    console.log(this.pokemons);
  }

}
