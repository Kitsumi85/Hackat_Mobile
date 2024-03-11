import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionAtelierPage } from './inscription-atelier.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionAtelierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionAtelierPageRoutingModule {}
