import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import NewForm from './newForm';
import { getBooks } from '../redux/books/books';

export default function List() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const JsonBooks = useSelector((state) => state.booksState.books) || [{ id: 0, title: 'No books yet...' }];
  const booksIds = Object.keys(JsonBooks);
  const books = [];
  booksIds.forEach((id) => { books.push({ id, ...JsonBooks[id][0] }); });

  return (
    <div className="list">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          completed={book.completed}
          chapter={book.chapter}
        />
      ))}
      <NewForm />
    </div>
  );
}
