// connect to an api and get data

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const getData = async () => {
  const response = await fetch(url, { method: 'POST' });
  const data = await response.json();
  return data;
};

console.log(getData());
