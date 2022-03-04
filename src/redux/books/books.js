const GET_BOOKS = 'freeBookApp/booksSlice/GET_BOOK';
const GET_BOOKS_SUCCESS = 'freeBookApp/booksSlice/GET_BOOK_SUCCESS';
const GET_BOOKS_FAILURE = 'freeBookApp/booksSlice/GET_BOOK_FAILURE';
const ADD_BOOK = 'freeBookApp/books/ADD_BOOK';
const REMOVE_BOOK = 'freeBookApp/books/REMOVE_BOOK';

const initialState = [];

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const API_KEY = 'upaRL8JIMk8no5RKgL1L';

export const getBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS });
  const response = await fetch(`${API_URL}/${API_KEY}/books/`);
  const data = await response.json();
  return dispatch({ type: GET_BOOKS_SUCCESS, data });
};

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
