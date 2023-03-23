const SEARCH_ENDPOINT = "https://api.itbook.store/1.0/search";

const getData = (query, absort_duration = 5000) => {
  const fetchController = new AbortController();
  const { signal } = fetchController;

  let timer = setTimeout(() => {
    fetchController.abort();
    console.log("abort");
  }, absort_duration);

  return fetch(`${SEARCH_ENDPOINT}/${query}`, { method: "GET", signal })
    .then((res) => {
      clearTimeout(timer);
      return res.json();
    })
    .then((res) => res.books.map((book) => book.title))
    .catch((e) => console.warn(e));
};

const getDataWithPagination = (query, page = 1, absort_duration = 5000) => {
  const fetchController = new AbortController();
  const { signal } = fetchController;

  let timer = setTimeout(() => {
    fetchController.abort();
    console.log("abort");
  }, absort_duration);

  return fetch(`${SEARCH_ENDPOINT}/${query}/${page}`, { method: "GET", signal })
    .then((res) => {
      clearTimeout(timer);
      return res.json();
    })
    .then((res) => res.books.map((book) => book.title))
    .catch((e) => console.warn(e));
};



export { getData, getDataWithPagination };
