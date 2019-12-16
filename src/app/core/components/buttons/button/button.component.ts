import { OnInit, Input, Component } from '@angular/core';

export class ButtonComponent implements OnInit {

  @Input()
  protected buttonText: string;
  @Input()
  protected buttonType = 'button';

  loading: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  onClickButton() {
    console.log('onclick');
  }
}
