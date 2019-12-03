import { Component, OnInit, NgZone } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  progress: number;

  constructor(
    private pokemonService: PokemonService,
    private ngZone: NgZone
  ) {
    this.progress = 0;
  }

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getPokemonList()
      .subscribe((result) => {
        console.log(result);
      });
  }

  processWithinAngularZone() {
    this.progress = 0;
    this.increaseProgress(() => console.log('Done!'));
  }

  increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => {
        this.increaseProgress(doneCallback);
      }, 10);
    } else {
      doneCallback();
    }
  }

  processOutsideAngularZone() {
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this.increaseProgress(() => {
        this.ngZone.run(() => {
          console.log('Outside Done!');
        });
      });
    });
  }

}
