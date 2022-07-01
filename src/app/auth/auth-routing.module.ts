import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },  
  { path: 'forgot', loadChildren: () => import('./forgot/forgot.module').then(m => m.ForgotModule) },
  
  { path: 'banner/:userEmail/:userName', loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule) },
  
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  
  { path: 'productsAdd', loadChildren: () => import('./products/add/add.module').then(m => m.AddModule) },
  {path:'**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
