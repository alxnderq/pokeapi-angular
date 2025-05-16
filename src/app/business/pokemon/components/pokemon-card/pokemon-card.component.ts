import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { PokemonTypes } from '../../enums';
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

  get backgroundColorClass() {
    return {
      'bg-bug': this.pokemonType === PokemonTypes.BUG,
      'bg-dark': this.pokemonType === PokemonTypes.DARK,
      'bg-dragon': this.pokemonType === PokemonTypes.DRAGON,
      'bg-electric': this.pokemonType === PokemonTypes.ELECTRIC,
      'bg-fairy': this.pokemonType === PokemonTypes.FAIRY,
      'bg-fighting': this.pokemonType === PokemonTypes.FIGHTING,
      'bg-fire': this.pokemonType === PokemonTypes.FIRE,
      'bg-flying': this.pokemonType === PokemonTypes.FLYING,
      'bg-ghost': this.pokemonType === PokemonTypes.GHOST,
      'bg-grass': this.pokemonType === PokemonTypes.GRASS,
      'bg-ground': this.pokemonType === PokemonTypes.GROUND,
      'bg-ice': this.pokemonType === PokemonTypes.ICE,
      'bg-normal': this.pokemonType === PokemonTypes.NORMAL,
      'bg-poison': this.pokemonType === PokemonTypes.POISON,
      'bg-psychic': this.pokemonType === PokemonTypes.PSYCHIC,
      'bg-rock': this.pokemonType === PokemonTypes.ROCK,
      'bg-steel': this.pokemonType === PokemonTypes.STEEL,
      'bg-water': this.pokemonType === PokemonTypes.WATER,
      'bg-shadow': this.pokemonType === PokemonTypes.SHADOW,
      'bg-unknown': this.pokemonType === PokemonTypes.UNKNOWN
    }
  }

  get textColorClass() {
    return {
      'text-bug': this.pokemonType === PokemonTypes.BUG,
      'text-dark': this.pokemonType === PokemonTypes.DARK,
      'text-dragon': this.pokemonType === PokemonTypes.DRAGON,
      'text-electric': this.pokemonType === PokemonTypes.ELECTRIC,
      'text-fairy': this.pokemonType === PokemonTypes.FAIRY,
      'text-fighting': this.pokemonType === PokemonTypes.FIGHTING,
      'text-fire': this.pokemonType === PokemonTypes.FIRE,
      'text-flying': this.pokemonType === PokemonTypes.FLYING,
      'text-ghost': this.pokemonType === PokemonTypes.GHOST,
      'text-grass': this.pokemonType === PokemonTypes.GRASS,
      'text-ground': this.pokemonType === PokemonTypes.GROUND,
      'text-ice': this.pokemonType === PokemonTypes.ICE,
      'text-normal': this.pokemonType === PokemonTypes.NORMAL,
      'text-poison': this.pokemonType === PokemonTypes.POISON,
      'text-psychic': this.pokemonType === PokemonTypes.PSYCHIC,
      'text-rock': this.pokemonType === PokemonTypes.ROCK,
      'text-steel': this.pokemonType === PokemonTypes.STEEL,
      'text-water': this.pokemonType === PokemonTypes.WATER,
      'text-shadow': this.pokemonType === PokemonTypes.SHADOW,
      'text-unknown': this.pokemonType === PokemonTypes.UNKNOWN
    }
  }

}
