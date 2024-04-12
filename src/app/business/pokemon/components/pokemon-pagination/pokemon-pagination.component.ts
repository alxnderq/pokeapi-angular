import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-pagination',
  templateUrl: './pokemon-pagination.component.html',
  styleUrls: ['./pokemon-pagination.component.scss']
})
export class PokemonPaginationComponent implements OnChanges{

  paginationItems: number[];

  @Input() defaultLimit: number;
  @Output() changedLimit: EventEmitter<number> = new EventEmitter<number>();

  limit: number;

  constructor() {
    this.defaultLimit = 0;
    this.limit = 0;
    this.paginationItems = [
      10,
      20,
      30,
      40,
      50
    ]
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['defaultLimit'] && changes['defaultLimit'].currentValue) {
      this.limit = changes['defaultLimit'].currentValue;
      this.renderPaginationItems();
    }
  }

  onSelectedValue(event: Event) {
    let value = (event.target as HTMLTextAreaElement).value;
    this.changedLimit.emit(parseInt(value));
  }

  renderPaginationItems() {
    this.paginationItems = [];
    for (let i = 1; i <= 5; i++) {
      let value: number = i * this.limit;
      this.paginationItems.push(value);
    }
  }

}
