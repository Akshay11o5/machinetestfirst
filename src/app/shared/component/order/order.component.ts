import { Component, OnInit } from '@angular/core';
import { Order } from '../../module/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orders: Array<Order> = [
    { orderId: 1001, user: 'John Doe', amount: 250, status: 'Pending' },
    { orderId: 1002, user: 'Jane Smith', amount: 480, status: 'Shipped' },
    { orderId: 1003, user: 'Alice Brown', amount: 120, status: 'Delivered' },
    { orderId: 1004, user: 'Bob White', amount: 320, status: 'Processing' },
    { orderId: 1005, user: 'Charlie Green', amount: 90, status: 'Cancelled' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
