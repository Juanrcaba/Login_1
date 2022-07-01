import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/product.interface';
import { ApiService } from 'src/app/service/api/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { AddComponent } from './add/add.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Product Name', 'Qty', 'Price','Category'];
  dataSource?: IProduct[];
  Loading = true;

  constructor(private modal: MatDialog, private apiService: ApiService,private authService:AuthService,private route:Router) { }

  ngOnInit(): void {    
    this.logged();
  }

  openModal():void{
   
    const modalRef = this.modal.open(AddComponent, {
      width: '300px',      
    });

    modalRef.afterClosed().subscribe(result => {      
      this.onFillTable();
    });
  }
  onFillTable(): void {
    
    this.apiService.onGetProducts().subscribe(data =>{
      this.dataSource = [...data];
    }, err=> console.log(err.message));
  
  }

  logged(){
    this.authService.getUserLogged().subscribe(res=>{
      if(res?.email == undefined)
      this.route.navigate([`/`]);
      else{
       
        this.onFillTable();
       this.Loading = false;
          }
      })
    } 
  
    onLogOut(){
      this.authService.logOut();
      this.route.navigate([`/`]);   
    }

}



