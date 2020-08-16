import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loginForm: FormGroup;
 isSubmitted: boolean;

 

  constructor(
    public formBuilder: FormBuilder,
    public  navCtrl: NavController
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['',[Validators.required,Validators.minLength(5)]],
      password: ['',[Validators.required,Validators.minLength(8)]],
    })

 
  }
  get errorControl() {
    return this.loginForm.controls;
  }


  entrar(){
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {
    return this.navCtrl.navigateRoot('/home')
    }
  }
}
