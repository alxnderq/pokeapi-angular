import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonLayoutComponent } from './pokemon-layout.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonContainerComponent, PokemonView } from './views/pokemon';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';


@NgModule({
  declarations: [
    PokemonLayoutComponent,
    PokemonContainerComponent,
    PokemonView,
    PokemonCardComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule
  ]
})
export class PokemonModule { }