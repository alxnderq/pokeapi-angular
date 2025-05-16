import { Component } from '@angular/core';
import { PokemonDetailsPresenter } from '.';

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.view.html',
    styleUrls: ['./pokemon-details.view.scss'],
    providers: [PokemonDetailsPresenter],
    standalone: false
})
export class PokemonDetailsView {

  constructor(
    protected presenter: PokemonDetailsPresenter
  ) {
  }

}
