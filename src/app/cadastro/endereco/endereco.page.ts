import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],

})
export class EnderecoPage implements OnInit {

  constructor(
    public navControl: NavController


  ) { }

  ngOnInit() {
  }
  done(){
    return this.navControl.navigateRoot('/home')
  }

}
