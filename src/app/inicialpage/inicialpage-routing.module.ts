import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicialpagePage } from './inicialpage.page';

const routes: Routes = [
  {
    path: '',
    component: InicialpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicialpagePageRoutingModule {}
