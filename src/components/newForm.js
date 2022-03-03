import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function NewForm() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const dispatchNewBook = (e) => {
    e.preventDefault();
    const book = {
      id: Date.now(),
      title: data.title,
      author: data.author,
      category: data.category,
      completed: 0,
      chapter: 0,
    };
    dispatch(addBook(book));
  };

  return (
    <form className="form" onSubmit={dispatchNewBook}>
      <input required type="text" name="title" placeholder="Title" className="form-title" onChange={handleChange} />
      <input required type="text" name="author" placeholder="Author" className="form-author" onChange={handleChange} />
      <input required type="text" name="category" placeholder="Category" className="form-category" onChange={handleChange} />
      <button type="submit" className="form-submit">Add</button>
    </form>
  );
}
