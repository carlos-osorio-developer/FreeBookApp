import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

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
    </div>
  );
}

List.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
