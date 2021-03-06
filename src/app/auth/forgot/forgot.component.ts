import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
 
  loginForm = new FormGroup({
    userName : new FormControl('',Validators.email)
  });

  constructor() {
  }

  ngOnInit(): void {    
  }

  onSubmit(){
  } 

  }
