import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';
import NewForm from './newForm';

export default function List(props) {
  const {
    books,
  } = props;

  return (
    <div className="list">
      {books.map((book) => (
        <Book
          key={book.id}
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

List.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
