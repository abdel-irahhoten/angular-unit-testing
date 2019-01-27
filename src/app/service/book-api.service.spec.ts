import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BookApiService} from './book-api.service';
import {BookApiServiceMock} from '../mocks/book-api.service.mock';
import {Book, Category} from '../model/book';

describe('BookApiService', () => {
  let injector;
  let service: BookApiService;
  let mock: BookApiServiceMock;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookApiService, BookApiServiceMock],
      imports: [
        HttpClientTestingModule
      ]
    });

    injector = getTestBed();
    service = injector.get(BookApiService);
    mock = injector.get(BookApiServiceMock);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#listAllBooks', () => {
    it('should return an Observable<Book[]> without filtering', () => {
      const dummyBooks: Book[] = mock.readBooks();

      service.listAllBooks().subscribe(books => {
        expect(books.length).toBe(5);
        expect(books[0].title).toEqual('The Clean Plate: Eat, Reset, Heal');
        expect(books[1].title).toEqual('Mediterranean Diet');
        expect(books[2].title).toEqual('The Wonderful Things You Will Be');
        expect(books[3].title).toEqual('Dragon Pearl (Rick Riordan Presents)');
        expect(books[4].title).toEqual('Leadership: In Turbulent Times');
      });

      const req = httpMock.expectOne(`./books`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyBooks);
    });
  });

  describe('#listBooksBycategory(Cook)', () => {
    it('should return an Observable<Book[]> filtered by [Cook] category', () => {
      const dummyBooks: Book[] = mock.getBooksByCategory(Category.COOK);

      service.listBooksByCategory('Cook').subscribe(books => {
        expect(books.length).toBe(2);
        expect(books[0].title).toEqual('The Clean Plate: Eat, Reset, Heal');
        expect(books[0].author).toEqual('Gwyneth Paltrow');
      });

      const req = httpMock.expectOne(`./books?category=Cook`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyBooks);
    });
  });

  describe('#listBooksBycategory(Children)', () => {
    it('should return an Observable<Book[]> filtered by [Children] category', () => {
      const dummyBooks: Book[] = mock.getBooksByCategory(Category.CHILDREN);

      service.listBooksByCategory('Children').subscribe(books => {
        expect(books.length).toBe(2);
        expect(books[0].title).toEqual('The Wonderful Things You Will Be');
        expect(books[1].title).toEqual('Dragon Pearl (Rick Riordan Presents)');
      });

      const req = httpMock.expectOne(`./books?category=Children`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyBooks);
    });
  });

  describe('#listBooksBycategory(Business)', () => {
    it('should return an Observable<Book[]> filtered by [Business] category', () => {
      const dummyBooks: Book[] = mock.getBooksByCategory(Category.BUSINESS);

      service.listBooksByCategory('Business').subscribe(books => {
        expect(books.length).toBe(1);
        expect(books[0].title).toEqual('Leadership: In Turbulent Times');
      });

      const req = httpMock.expectOne(`./books?category=Business`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyBooks);
    });
  });


});
