import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import NewForm from './newForm';

export default function List() {
  const books = useSelector((state) => state.books);

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
