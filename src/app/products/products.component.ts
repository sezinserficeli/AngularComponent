import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      color: 'red',
      available: 'Available',
      image: 'https://picsum.photos/50/50',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      color: 'green',
      available: 'Available',
      image: 'https://picsum.photos/50/50',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      color: 'blue',
      available: 'Not Available',
      image: 'https://picsum.photos/50/50',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      color: 'yellow',
      available: 'Not Available',
      image: 'https://picsum.photos/50/50',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 500,
      color: 'pink',
      available: 'Available',
      image: 'https://picsum.photos/50/50',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 600,
      color: 'orange',
      available: 'Available',
      image: 'https://picsum.photos/50/50',
    },
  ];
}
