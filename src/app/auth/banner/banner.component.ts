import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { object } from 'rxfire/database';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

 userData = {email:'',userName:''};

  constructor(private ruta: ActivatedRoute,private authService:AuthService,private route:Router) { }
  
  ngOnInit(): void {
    this.logged();
   
  }

  onLogOut(){
    this.authService.logOut();
    this.route.navigate([`/`]);   
  }
  
  logged(){
    this.authService.getUserLogged().subscribe(res=>{
      if(res?.email == undefined)
      this.route.navigate([`/`]);
      else{
        this.userData ={
          email: this.ruta.snapshot.params['userEmail'],
          userName: this.ruta.snapshot.params['userName']
          }
      }
    }) 
  }
}
