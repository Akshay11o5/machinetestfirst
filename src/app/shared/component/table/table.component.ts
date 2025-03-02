import { Component, OnInit } from '@angular/core';
import { Tableone } from '../../module/tableone';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  users: Array<Tableone> = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
    { id: 4, name: 'Bob White', email: 'bob@example.com', role: 'User' },
    {
      id: 5,
      name: 'Charlie Green',
      email: 'charlie@example.com',
      role: 'Admin',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
