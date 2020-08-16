import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicialpage',
    pathMatch: 'full'
  },
  {
    path: 'inicialpage',
    loadChildren: () => import('./inicialpage/inicialpage.module').then( m => m.InicialpagePageModule)
  },
  {
    path: 'dados',
    loadChildren: () => import('./cadastro/dados/dados.module').then( m => m.DadosPageModule)
  },
  {
    path: 'endereco',
    loadChildren: () => import('./cadastro/endereco/endereco.module').then( m => m.EnderecoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
