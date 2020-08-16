import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicialpage',
  templateUrl: './inicialpage.page.html',
  styleUrls: ['./inicialpage.page.scss'],
})
export class InicialpagePage implements OnInit {

  constructor(
   public  navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  criarlogin(){
    return this.navCtrl.navigateRoot('/dados')
  }
  login(){
    return this.navCtrl.navigateRoot('/login')
  }


}
