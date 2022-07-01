import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductsComponent } from './auth/products/products.component';
import { IProduct } from './Models/product.interface';
import { ApiService } from './service/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Login_1';

  items? : IProduct[];

  constructor(){ }

  ngOnInit(): void {
    
  }

}
