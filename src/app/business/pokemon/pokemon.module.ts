import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonLayoutComponent, PokemonRoutingModule } from '.';
import { PokemonCardComponent } from './components/pokemon-card';
import { PokemonItemComponent } from './components/pokemon-item';
import { PokemonListComponent } from './components/pokemon-list';
import { PokemonPaginationComponent } from './components/pokemon-pagination';
import { PokemonSearchComponent } from './components/pokemon-search';
import { PokemonView } from './views/pokemon';
import { PokemonDetailsView } from './views/pokemon-details';


@NgModule({
  declarations: [
    PokemonLayoutComponent,
    PokemonView,
    PokemonItemComponent,
    PokemonListComponent,
    PokemonSearchComponent,
    PokemonCardComponent,
    PokemonDetailsView,
    PokemonPaginationComponent
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
