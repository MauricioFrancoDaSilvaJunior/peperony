import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicialpagePageRoutingModule } from './inicialpage-routing.module';

import { InicialpagePage } from './inicialpage.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicialpagePageRoutingModule,
    RouterModule.forChild([
      {path: 'dados', loadChildren: './cadastro/dados/dados.module'}
    ])
  ],
  declarations: [InicialpagePage]
})
export class InicialpagePageModule {}
