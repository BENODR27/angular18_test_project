// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { ProductRoutingModule } from './product-routing.module';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     ProductRoutingModule
//   ]
// })
// export class ProductModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    ]
})
export class ProductModule { }