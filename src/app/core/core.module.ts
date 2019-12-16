import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/buttons/secondary-button/secondary-button.component';
import { ButtonComponent } from './components/buttons/button/button.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ]
})
export class CoreModule { }
