import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book(props) {
  const {
    id, title, author, category, completed, chapter,
  } = props;

  const dispatch = useDispatch();
  const deleteBook = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <div className="book">
      <div className="book-details">
        <div>
          <span className="book-category">{category}</span>
          <h2 className="book-title">{title}</h2>
          <h3 className="book-author">{author}</h3>
        </div>
        <div className="book-actions">
          <button type="button">Comments</button>
          {' | '}
          <button type="button" onClick={deleteBook}>Remove</button>
          {' | '}
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-status">
        <div className="book-progress">
          <i />
          <div className="book-progress-rectangle">
            <div className="book-progress-circle" />
          </div>

          <div className="book-progress-text">
            <p className="book-progress-percentage">{`${completed}%`}</p>
            <p>Completed</p>
          </div>
        </div>
      </div>
      <div className="book-chapter">
        <p>CURRENT CHAPTER</p>
        <p className="book-chapter-current">{chapter}</p>
        <button type="button" className="book-chapter-update">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  completed: PropTypes.number,
  chapter: PropTypes.number,
};

Book.defaultProps = {
  completed: 22,
  chapter: 1,
};
