import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const {
    title, author, category, completed, chapter,
  } = props;

  return (
    <div className="book">
      <div className="book-left">
        <div className="info">
          <span>{category}</span>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
        <div className="buttons">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-center">
        <p>{completed}</p>
        <span>Completed</span>
      </div>
      <div className="book-right">
        <p>Current chapter</p>
        <span>
          Chapter
          {chapter}
        </span>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
};
