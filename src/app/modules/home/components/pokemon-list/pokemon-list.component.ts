import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit() {
    // this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getPokemonList()
      .subscribe((result) => {
        console.log(result);
      });
  }

}
