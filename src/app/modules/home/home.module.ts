import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    PokemonListComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    HomeRoutingModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class HomeModule { }
