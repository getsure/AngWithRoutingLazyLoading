import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myProduct:any;
  constructor(private activatedRoute:ActivatedRoute, private productsService:ProductsService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id']
    this.productsService.getProduct(id).subscribe(product=> this.myProduct = product)
  }

}
