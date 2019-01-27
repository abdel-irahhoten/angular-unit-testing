export class Book {
  title: string;
  author: string;
  price: string;
  category: Category;

  constructor(title: string, author: string, price: string, category: Category) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.category = category;
  }
}

export enum Category {
  COOK = 'Cook books',
  CHILDREN = 'Children books',
  BUSINESS = 'Business books'
}
