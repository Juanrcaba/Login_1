import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// reactive form
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const modules = [ReactiveFormsModule,MatInputModule,MatIconModule,MatCardModule,MatButtonModule];


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
