import { Component, OnInit, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent extends ButtonComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
