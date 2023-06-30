import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnChanges{

  @Output()
  selectedPokemon: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  pokemon!: Pokemon;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }

  onSelectedPokemon() {
    this.selectedPokemon.emit(this.pokemon.name);
  }

}
