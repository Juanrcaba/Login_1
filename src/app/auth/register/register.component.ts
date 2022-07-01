import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/alert/alert.component';
import { AuthService } from 'src/app/service/auth.service';
import { users } from '../Models/users.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

user={
  email: '',
  password: ''
}

  loginForm: FormGroup = new FormGroup({
    userName : new FormControl(''),
    userPassword: new FormControl(''),
    userSecondPassword: new FormControl('')
  });

  constructor(private authService: AuthService, private route:Router,private _snackBar:MatSnackBar) { }
  // constructor(private db:AngularFireDatabase, private _snackBar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(`${this.loginForm.value.userName}`, `${this.loginForm.value.userPassword}`)
    .then((res) => {
        this._snackBar.openFromComponent(AlertComponent,{
        data: ["Account registered successfully","success"],
        duration:1500,
        horizontalPosition: "center",
        verticalPosition: "top",
      });

      setTimeout(() => {
        this.route.navigate(['/login']);
      }, 2000);
      
      })
    .catch(err => console.log('err',err.message ));
   
  }
 

}
