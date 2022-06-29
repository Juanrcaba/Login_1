import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Login_1';
  // items : Observable<any[]>;

  constructor(firestore: AngularFirestore,private db:AngularFireDatabase){
    firestore.collection('users').valueChanges().subscribe(res => {
      console.log(res);
    });

    db.list('users').valueChanges().subscribe(res => {
      console.log(res);
    });
  }
}
