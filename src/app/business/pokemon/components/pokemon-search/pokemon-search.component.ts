import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-pokemon-search',
    templateUrl: './pokemon-search.component.html',
    styleUrls: ['./pokemon-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PokemonSearchComponent {

    @Output()
    onEnterEmitter = new EventEmitter<string>();

    constructor() {
    }

    onEnter(value: string) {
        if (value) {
            this.onEnterEmitter.emit(value);
        }
    }
}
