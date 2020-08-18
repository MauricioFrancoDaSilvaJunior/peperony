import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPageRoutingModule } from './dados-routing.module';

import { DadosPage } from './dados.page';
import { RouterModule } from '@angular/router';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPageRoutingModule,
    BrMaskerModule,
    RouterModule.forChild([
      {path: 'endereco', loadChildren: './cadastro/endereco/endereco.module'}
      
    ]),
  ],
  declarations: [DadosPage]
})
export class DadosPageModule {}
