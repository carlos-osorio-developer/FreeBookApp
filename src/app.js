import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import List from './components/list';
import Categories from './pages/categories';
import './app.css';

export default function App() {
  const books = [
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
      completed: 0,
      chapter: 1,
    },
    {
      id: 2,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
      completed: 30,
      chapter: 2,
    },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<List books={books} />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
