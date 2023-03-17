const getHints = (value) => {
  return fetch(`https://api.itbook.store/1.0/search/${value}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res.books.map((book) => book.title));
};
