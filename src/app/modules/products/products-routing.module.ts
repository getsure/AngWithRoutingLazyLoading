import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from 'src/app/product/product.component';
import { ProductsComponent } from 'src/app/products/products.component';

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path:':id', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
