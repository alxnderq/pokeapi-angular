import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class HomeModule { }
