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
    <div>
      <h2 className="book-add-h">ADD NEW BOOK</h2>
      <form className="book-add-form" onSubmit={dispatchNewBook}>
        <input required type="text" name="title" placeholder="Title" className="book-add-title" onChange={handleChange} />
        <select className="book-add-category" name="category" id="categories" onChange={handleChange}>
          <option value="">Category</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button type="submit" className="book-add-button">Add</button>
      </form>
    </div>
  );
}
