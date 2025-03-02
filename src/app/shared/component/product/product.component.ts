import { Component, OnInit } from '@angular/core';
import { Product } from '../../module/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [
    { id: 101, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 102, name: 'Phone', price: 699, category: 'Electronics' },
    { id: 103, name: 'Shoes', price: 89, category: 'Fashion' },
    { id: 104, name: 'Watch', price: 150, category: 'Accessories' },
    { id: 105, name: 'Backpack', price: 50, category: 'Travel' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
