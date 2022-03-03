import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function NewForm() {
  const dispatch = useDispatch();

  const dispatchNewBook = (e) => {
    e.preventDefault();
    const book = {
      id: Date.now(),
      title: 'first',
      author: 'first',
      category: 'first',
      completed: 0,
      chapter: 0,
    };
    dispatch(addBook(book));
  };

  return (
    <form className="form" onSubmit={dispatchNewBook}>
      <input type="text" placeholder="Title" className="form-title" />
      <input type="text" placeholder="Author" className="form-author" />
      <input type="text" placeholder="Category" className="form-category" />
      <button type="submit" className="form-submit">Add</button>
    </form>
  );
}
