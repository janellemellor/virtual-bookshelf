export const addBook = book => {
  return fetch(`${process.env.BOOK_API_URL}/api/v1/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
  .then(res => res.json());
};