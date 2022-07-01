import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async login(email:string, password:string){
    return await new Promise((resolve,reject)=>{

      this.afauth.signInWithEmailAndPassword(email,password)
      .then(userData => resolve(userData.user),
       err => reject(err));        
     
    });    
    
  
  }
  async loginWithGoogle(email:string, password:string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log("error con google "+error);
      return null;
    }
  }

  async register(email:string, password:string){
    return await new Promise((resolve,reject)=>{
      this.afauth.createUserWithEmailAndPassword(email,password)
      .then(userData => resolve(userData),
       err => reject(err)); 
      })
   }

   getUserLogged(){
    return this.afauth.authState;
   }

   logOut(){
    this.afauth.signOut();
   }
}