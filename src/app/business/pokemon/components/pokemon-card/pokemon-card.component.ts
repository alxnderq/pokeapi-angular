import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnChanges{

  @Input()
  pokemon!: Pokemon;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }

}
