import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonLayoutComponent } from '.';
import { PokemonView } from './views/pokemon';
import { PokemonDetailsView } from './views/pokemon-details';

const routes: Routes = [
  {
    path: '',
    component: PokemonLayoutComponent,
    children: [
      {
        path: '',
        component: PokemonView
      },
      {
        path: 'pokemon/:name',
        component: PokemonDetailsView
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
