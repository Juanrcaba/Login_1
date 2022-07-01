import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


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

  constructor(private authService: AuthService, private route:Router) { }

  ngOnInit(): void {
    this.logged();
  }


  onSubmit(){}

  onLogin(){
    this.authService.login(`${this.loginForm.value.userName}`, `${this.loginForm.value.userPassword}`)
    .then((res: any)=>{
      this.route.navigate([`/banner/${res?.email}/${res?.displayName}`]);
     
    });
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle(`${this.loginForm.value.userName}`, `${this.loginForm.value.userPassword}`).then(res =>{
    this.route.navigate([`/banner/${res?.user?.email}/${res?.user?.displayName}`]);
    },err=> console.log(err.message));
  }

  logged(){
    this.authService.getUserLogged().subscribe(res=>{
      if(res?.email != undefined)
      this.route.navigate([`/banner/${res?.email}/${res?.displayName}`]);
    }) 
  }

}
