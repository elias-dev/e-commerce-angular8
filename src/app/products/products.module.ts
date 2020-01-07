import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';


import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }