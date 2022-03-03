import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/header';
import List from './components/list';
import Categories from './pages/categories';
import './app.css';

export default function App() {
  const books = useSelector((state) => state.books);
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
