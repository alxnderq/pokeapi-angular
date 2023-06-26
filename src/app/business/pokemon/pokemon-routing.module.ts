import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonLayoutComponent } from './pokemon-layout.component';
import { PokemonContainerComponent } from './views/pokemon';

const routes: Routes = [
  {
    path: '',
    component: PokemonLayoutComponent,
    children: [
      {
        path: '',
        component: PokemonContainerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
