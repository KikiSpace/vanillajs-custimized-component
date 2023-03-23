import { debounce, getDataWithCache } from "./utils";

const input = document.querySelector("input");
const displayFrame = document.querySelector(".display");

const renderDisplay = async (query) => {
  displayFrame.replaceChildren();
  const hints = await getDataWithCache(query);
  console.log("hints: " + hints);
  hints.forEach((hint) => {
    const newhint = document.createElement("div");
    newhint.classList.add("hint-item");
    newhint.textContent = hint;
    newhint.addEventListener("click", () => {
      input.value = newhint.textContent;
      displayFrame.replaceChildren();
    });
    displayFrame.appendChild(newhint);
  });
};

const inputEventHandler = (e) => {
  const query = e.target.value;
  if (query !== "") {
    console.log(query);
    renderDisplay(query);
  } else {
    displayFrame.replaceChildren();
  }
};

input.addEventListener("keyup", debounce(inputEventHandler));
