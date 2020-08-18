import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  constructor(
    public navControl: NavController
  ) { }

  ngOnInit() {

  }
  Proximo(){
    return this.navControl.navigateRoot('/endereco')
  }

}
