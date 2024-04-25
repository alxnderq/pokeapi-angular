import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../models';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent implements OnChanges {

  @Input() pokemon!: Pokemon;

  pokemonType: string;

  defaultPokemonImage: string;

  constructor() {
    this.pokemonType = 'normal';
    this.defaultPokemonImage = '/assets/images/pokemon.png';
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['pokemon'];

    if (change && change.currentValue) {
      this.pokemon = change.currentValue;

      this.pokemonType = this.pokemon.types[0].type.name;
    }
  }

  onImageError() {
    this.pokemon.sprites.other['official-artwork'].front_default = this.defaultPokemonImage;
  }

}
