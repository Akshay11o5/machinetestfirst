import { Component, OnInit } from '@angular/core';
import { Book } from '../../module/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books: Array<Book> = [
    {
      id: 301,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
    },
    { id: 302, title: '1984', author: 'George Orwell', year: 1949 },
    {
      id: 303,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
    },
    { id: 304, title: 'Moby Dick', author: 'Herman Melville', year: 1851 },
    {
      id: 305,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
