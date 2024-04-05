import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'atelier',
    loadChildren: () => import('./atelier/atelier.module').then( m => m.AtelierPageModule)
  },
  {
    path: 'inscription-atelier',
    loadChildren: () => import('./inscription-atelier/inscription-atelier.module').then( m => m.InscriptionAtelierPageModule)
  },
  {
    path: 'erreur',
    loadChildren: () => import('./erreur/erreur.module').then( m => m.ErreurPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
