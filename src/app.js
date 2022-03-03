import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import List from './components/list';
import Categories from './pages/categories';
import './app.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
