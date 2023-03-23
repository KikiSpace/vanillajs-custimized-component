import { duration } from "@material-ui/core";
import { fakedata } from "./fakedata";
const cache = {};

//simulate the backend api
const getData = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakedata.filter((item) => item.startsWith(query)));
    }, 500);
  });
};

const getDataWithCache = async (query) => {
  if (cache[query] !== undefined) {
    console.log("%cusing cache...", "color:green;");
    return cache[query];
  }

  const data = await getData(query);
  cache[query] = data;
  console.log("cache: " + JSON.stringify(cache));
  return data;
};

const debounce = (func, duration = 400) => {
  let timeoutcontext = null;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutcontext);
    timeoutcontext = setTimeout(() => {
      func.apply(context, args);
    }, duration);
  };
};

export { getData, debounce, getDataWithCache };
