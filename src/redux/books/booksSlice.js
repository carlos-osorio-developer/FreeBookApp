const GET_BOOKS = 'freeBookApp/booksSlice/GET_BOOK';
const GET_BOOKS_SUCCESS = 'freeBookApp/booksSlice/GET_BOOK_SUCCESS';
const GET_BOOKS_FAILURE = 'freeBookApp/booksSlice/GET_BOOK_FAILURE';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const API_KEY = 'upaRL8JIMk8no5RKgL1L';

const getBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS });
  const response = await fetch(`${API_URL}/${API_KEY}/books/`);
  const data = await response.json();
  return dispatch({ type: GET_BOOKS_SUCCESS, data });
};

export {
  getBooks as default,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
};
