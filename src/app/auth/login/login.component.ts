import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName : new FormControl(''),
    userPassword: new FormControl('')

  });
  constructor() { }

  ngOnInit(): void {
    // this.db.object('users').valueChanges().subscribe((data:any) =>{
    //  console.log(`Hola ${data[0].nombre} tu correo es ${data[0].Correo}`)
    // })
  }
  onSubmit(){
    console.warn(this.loginForm.value);
  }

}
