import React from 'react';
import List from './components/list';
import NewForm from './components/newForm';

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
      <List books={books} />
      <NewForm />
    </div>
  );
}
