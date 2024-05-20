import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnChanges {

  @Output()
  selectedPokemon: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  pokemon!: Pokemon;

  defaultPokemonImage: string;

  constructor() {
    this.defaultPokemonImage = '/assets/images/pokemon.png';
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['pokemon'];
    if (change && change.currentValue) {
      this.pokemon = change.currentValue;
    }
  }

  onSelectedPokemon() {
    this.selectedPokemon.emit(this.pokemon.name);
  }

  onErrorImage(): void {
    this.pokemon.sprites.other['official-artwork'].front_default = this.defaultPokemonImage;
  }

}
