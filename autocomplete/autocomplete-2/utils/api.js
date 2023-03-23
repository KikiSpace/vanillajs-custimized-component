// simulate the http request
const getData = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = data.filter((item) => item.startsWith(query));
      console.log("##:" + result);
      resolve(result);
    }, 500);
  });
};

const debounce = (func, duration = 400) => {
  let timeoutevent;

  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutevent);
    timeoutevent = setTimeout(() => func.apply(this, arguments), duration);
  };
};
