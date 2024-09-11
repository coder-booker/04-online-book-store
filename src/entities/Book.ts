type BookType = {
  id: string, 
  bookname: string, 
  author: string, 
  publication_date: string, 
  price: number
}

export { BookType };

export default class Book {
  public id: string;
  public bookname: string;
  public author: string;
  public publication_date: string;
  public price: number;

  constructor ({
    id,
    bookname, 
    author, 
    publication_date, 
    price
  }: BookType
  ) {
    this.id = id;
    this.bookname = bookname;
    this.author = author;
    this.publication_date = publication_date;
    this.price = price;
  }

  public update({
    id,
    bookname, 
    author, 
    publication_date, 
    price
  }: BookType
) {
    this.bookname = bookname;
    this.author = author;
    this.publication_date = publication_date;
    this.price = price;
  }

  public toJSON() {
    return {
      id: this.id,
      bookname: this.bookname,
      author: this.author,
      publication_date: this.publication_date,
      price: this.price
    }
  }
}
