import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// reactive form
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';


//firebase
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

const modules = [ReactiveFormsModule,MatInputModule,MatIconModule,MatCardModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,
AngularFireModule.initializeApp(environment.firebase),
AngularFireDatabaseModule,
MatSnackBarModule];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports:[
    modules
  ]
})
export class SharedModule { }
