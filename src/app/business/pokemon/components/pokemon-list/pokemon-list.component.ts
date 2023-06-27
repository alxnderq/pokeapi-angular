import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnChanges {

  @Input() list: Pokemon[];

  pokemonList: Pokemon[];

  constructor() {
    this.list = [];
    this.pokemonList = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['list'] && changes['list'].currentValue) {
      this.pokemonList = changes['list'].currentValue;
    }
  }

}
