import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public book: Book[] = [];

  //add book
  addBookService(book: Book): string {
    book.id = uuidv4();
    this.book.push(book);
    return 'Book Add Successfully!!!';
  }

  //update book
  updateBookService(book: Book): string {
    const index = this.book.findIndex((currentBook) => {
      return currentBook.id == book.id;
    });
    this.book[index] = book;
    return 'Book Update Successfully!!!';
  }

  //delete book
  deleteBookService(bookId: string): string {
    this.book = this.book.filter((currentbook) => {
      return currentbook.id != bookId;
    });
    return 'Delete Book Successfully!!!';
  }

  //findAll book
  findAllBook(): Book[] {
    return this.book;
  }
}
