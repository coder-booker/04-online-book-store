import Book, {BookType} from '../entities/Book';

const Database: { [key: string]: BookType } = {
  "1": {
    id: '1',
    bookname: 'book1',
    author: 'author1', 
    publication_date: '2021-01-01', 
    price: 100
  },
};



export default class BookStoreModel {
  public static async getAll() {
    const allBooks = Object.keys(Database).map((key) => {
      return new Book(Database[key]);
    });
    return allBooks;
  }

  public static async get(id: string): Promise<Book[]> {
    const result = Database[id];
    if (!result) {
      return [];
    }

    return [new Book(result)];
  }

  public static async create(book: Book): Promise<Book[]> {
    Database[book.id] = {...book};

    return [book];
  }

  public static async update(book: Book): Promise<Book[]> {
    const currentBook = Database[book.id];
    if (!currentBook) {
      return [];
    }

    let newBook = new Book(currentBook);
    // simulate update
    newBook.update(book);
    Database[book.id] = {...newBook};

    return [newBook]; 
  }

  public static async delete(id: string): Promise<Book[]> {
    const currentBook = Database[id];
    if (!currentBook) {
      return [];
    }
    let deletedBook = new Book(currentBook);
    
    delete Database[id];

    return [deletedBook]; 
  }
}