import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from './booksSlice';

const ADD_BOOK = 'freeBookApp/books/ADD_BOOK';
const REMOVE_BOOK = 'freeBookApp/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, pending: true };
    case GET_BOOKS_SUCCESS:
      return { ...state, pending: false, books: action.payload };
    case GET_BOOKS_FAILURE:
      return { ...state, pending: false, error: action.payload };
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}
