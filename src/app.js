import React from 'react';
import Book from './components/book';

export default function App() {
  return (
    <div className="app">
      <Book title="The Hobbit" author="J.R.R. Tolkien" category="Fantasy" completed={60} chapter={3} />
    </div>
  );
}
