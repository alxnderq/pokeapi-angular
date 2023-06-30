import { Component } from '@angular/core';
import { PokemonDetailsPresenter } from '.';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.view.html',
  styleUrls: ['./pokemon-details.view.scss'],
  providers: [PokemonDetailsPresenter]
})
export class PokemonDetailsView {

  availableStyles: string[] = [
    'bg-bug',
    'bg-dark',
    'bg-dragon',
    'bg-electric',
    'bg-fairy',
    'bg-fighting',
    'bg-fire',
    'bg-flying',
    'bg-ghost',
    'bg-grass',
    'bg-ground',
    'bg-ice',
    'bg-normal',
    'bg-poison',
    'bg-psychic',
    'bg-rock',
    'bg-steel',
    'bg-water',
    'bg-shadow',
    'bg-unknown'
  ]

  constructor(
    protected presenter: PokemonDetailsPresenter
  ) {
  }

  getBackgroundColorStyle(type: string) {
    if (this.availableStyles.includes(`bg-${type}`)) {
      return `bg-${type}`;
    }
    return 'bg-primary';
  }

}
