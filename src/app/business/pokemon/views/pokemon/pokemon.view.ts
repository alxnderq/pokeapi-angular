import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Pokemon } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokemon-view',
  templateUrl: './pokemon.view.html',
  styleUrls: ['./pokemon.view.scss']
})
export class PokemonView implements OnChanges {

  @Input()
  list!: Pokemon[];

  constructor() {
  }

  ngOnChanges() {
    console.log('changes');
    console.log(this.list);
  }

}
