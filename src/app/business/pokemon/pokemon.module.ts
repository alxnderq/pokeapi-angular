import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonLayoutComponent, PokemonRoutingModule } from '.';
import { PokemonItemComponent, PokemonListComponent, PokemonSearchComponent } from './components';
import { PokemonView } from './views/pokemon';
import { PokemonDetailsView } from './views/pokemon-details';


@NgModule({
  declarations: [
    PokemonLayoutComponent,
    PokemonView,
    PokemonItemComponent,
    PokemonListComponent,
    PokemonSearchComponent,
    PokemonDetailsView
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
  ]
})
export class PokemonModule { }
