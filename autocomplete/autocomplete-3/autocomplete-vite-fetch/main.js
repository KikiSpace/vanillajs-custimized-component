import { getData, getDataWithPagination } from "./api";

const input = document.querySelector("input");
const displayFrame = document.querySelector(".display");
let page = 1;

let observer = new IntersectionObserver((entries) => {
  const lastItem = entries[0];
  if (!lastItem.isIntersecting) return;

  console.log("visible!");
  page++;
  observer.unobserve(lastItem.target);
  renderDisplayWithPagination(input.value, page);
  console.log("observed!");
});

const renderDisplay = (query) => {
  displayFrame.replaceChildren();
  getData(query).then((data) => {
    console.log(data);
    data.forEach((item, idx) => {
      const displayItem = document.createElement("div");
      displayItem.classList.add("display-item");
      displayItem.textContent = item;
      displayItem.addEventListener("click", () => {
        input.value = displayItem.textContent;
        displayFrame.replaceChildren();
      });
      displayFrame.appendChild(displayItem);
      if (idx === data.length - 1) {
        console.log("start Observing: " + displayItem.textContent);
        observer.observe(displayItem);
      }
    });
  });
};

const renderDisplayWithPagination = (query) => {
  getDataWithPagination(query, page).then((data) => {
    console.log(data);
    data.forEach((item, idx) => {
      const displayItem = document.createElement("div");
      displayItem.classList.add("display-item");
      displayItem.textContent = item;
      displayItem.addEventListener("click", () => {
        input.value = displayItem.textContent;
        displayFrame.replaceChildren();
      });
      displayFrame.appendChild(displayItem);
      if (idx === data.length - 1) {
        console.log("start Observing: " + displayItem.textContent);
        observer.observe(displayItem);
      }
    });
  });
};

const inputHandler = (e) => {
  console.log(e.target.value);
  if (e.target.value !== "") {
    renderDisplay(e.target.value);
  } else {
    displayFrame.replaceChildren();
  }
};

input.addEventListener("keyup", inputHandler);
