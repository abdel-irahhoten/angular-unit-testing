import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Book} from '../model/book';


@Injectable()
export class BookApiService {

  constructor(private http: HttpClient) {
  }

  listAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`./books`);
  }

  listBooksByCategory(category: string): Observable<Book[]> {
    return this.http.get<Book[]>(`./books?category=${category}`);
  }
}
