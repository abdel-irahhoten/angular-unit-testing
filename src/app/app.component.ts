import {Component} from '@angular/core';
import {BookApiService} from './service/book-api.service';
import {BookApiServiceMock} from './mocks/book-api.service.mock';
import {Category} from './model/book';

@Component({
  selector: 'app-root',
  providers: [BookApiService, BookApiServiceMock],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';
  mockService: BookApiServiceMock;
  books = [];

  constructor(service: BookApiService, mockService: BookApiServiceMock) {
    this.mockService = mockService;
    this.books = mockService.readBooks();
  }

  filter(category?: Category) {
    this.books = this.mockService.getBooksByCategory(category);
    console.log(`category : ${category}`);
  }

}
