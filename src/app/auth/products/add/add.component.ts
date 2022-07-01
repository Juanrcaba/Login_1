import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addForm! :  FormGroup;

  categories = ['Food','Detergent','Textile'];
  
  constructor(private apiService:ApiService, public modalRef: MatDialogRef<ProductsComponent>
    ,private formBuilder:FormBuilder, private authService: AuthService, private route:Router) { }

  ngOnInit(): void {
    this.logged();
    this.addForm = this.formBuilder.group({
     
      id : [''],
      pName: ['', Validators.required],
      pQty: ['', Validators.required],
      pPrice: ['', Validators.required],
      pCategory: ['',Validators.required]   
   
  });
  }

  initReactiveForm(){
   
  }

  onSendData(){
    this.apiService.onPostProduct(this.addForm.value).subscribe();  
    this.modalRef.close();
  }


  logged(){
    this.authService.getUserLogged().subscribe(res=>{
      if(res?.email == undefined)
      this.route.navigate([`/`]);      
      })
    }
  
}
