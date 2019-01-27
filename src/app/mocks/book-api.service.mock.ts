import {Injectable} from '@angular/core';
import {Book, Category} from '../model/book';

@Injectable()
export class BookApiServiceMock {
  constructor() {
  }

  readBooks(): Book[] {
    return [
      {
        title: 'The Clean Plate: Eat, Reset, Heal',
        author: 'Gwyneth Paltrow',
        price: '21.99',
        category: Category.COOK
      },
      {
        title: 'Mediterranean Diet',
        author: 'Rockridge Press',
        price: '8.50',
        category: Category.COOK
      },
      {
        title: 'The Wonderful Things You Will Be',
        author: 'Emily Winfield Martin',
        price: '10.79',
        category: Category.CHILDREN
      },
      {
        title: 'Dragon Pearl (Rick Riordan Presents)',
        author: 'Yoon Ha Lee',
        price: '11.72',
        category: Category.CHILDREN
      },
      {
        title: 'Leadership: In Turbulent Times',
        author: 'Doris Kearns Goodwin',
        price: '19.50',
        category: Category.BUSINESS
      }

    ];
  }

  getBooksByCategory(category: Category): Book[] {
    return category == null ? this.readBooks() : this.readBooks().filter(book => book.category === category);
  }
}
