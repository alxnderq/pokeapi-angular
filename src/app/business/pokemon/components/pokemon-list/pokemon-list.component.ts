import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../models';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss'],
    standalone: false
})
export class PokemonListComponent implements OnChanges {

  @Input() list: Pokemon[];
  @Output() selectedPokemon: EventEmitter<string> = new EventEmitter<string>();

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

  onSelectedPokemon(name: string) {
    this.selectedPokemon.emit(name);
  }

}
