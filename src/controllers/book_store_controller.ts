import { v4 as uuidv4 } from 'uuid';

import Book from '../entities/Book';
import BookStoreModel from '../models/book_store_models';
import catchErrors from '../errors/500';


export default class BookStoreController {
  
  @catchErrors
  public static async create(BookData: any) {
    const book = new Book({
      ...BookData,
      id: uuidv4(),
    });
    const result = await BookStoreModel.create(book);
    const result_book = result[0];

    return {
      status: 201,
      data: result_book.toJSON()
    }
  }

  @catchErrors
  public static async get(id: string) {
    const result = await BookStoreModel.get(id);
    if (result.length === 0) {
      return {
        status: 404,
        data: {
          message: 'Not Found'
        }
      }
    }

    const result_book = result[0];

    return {
      status: 200,
      data: result_book.toJSON()
    };
  }

  @catchErrors
  public static async update(book: Book) {
    const result = await BookStoreModel.update(book);
    if (result.length === 0) {
      return {
        status: 404,
        data: {
          message: 'not found'
        }
      }
    }

    const result_book = result[0];

    return {
      status: 200,
      data: result_book.toJSON()
    };
  }

  @catchErrors
  public static async delete(id: string) {
    const result = await BookStoreModel.delete(id);
    if (result.length === 0) {
      return {
        status: 404,
        data: {
          message: 'not found'
        }
      }
    }
    const result_book = result[0];

    return {
      status: 200,
      data: result_book.toJSON()
    };
  }

}