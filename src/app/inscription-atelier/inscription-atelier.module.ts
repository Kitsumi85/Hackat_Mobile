import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionAtelierPageRoutingModule } from './inscription-atelier-routing.module';

import { InscriptionAtelierPage } from './inscription-atelier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InscriptionAtelierPageRoutingModule
  ],
  declarations: [InscriptionAtelierPage]
})
export class InscriptionAtelierPageModule {}
