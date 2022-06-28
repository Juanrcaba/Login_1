import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    userName : new FormControl(''),
    userPassword: new FormControl(''),
    userSecondPassword: new FormControl('')

  });
  constructor() { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    if(this.loginForm.value.userPassword === this.loginForm.value.userSecondPassword)
    console.log("son iguales");

    if(this.loginForm.value.userPassword !== this.loginForm.value.userSecondPassword)
    console.log("No son iguales");
  }

}
