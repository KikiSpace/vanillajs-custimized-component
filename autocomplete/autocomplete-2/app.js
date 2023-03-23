const input = document.querySelector("input");
const displayFrame = document.querySelector(".display");

const renderAutoComplete = async (query) => {
  displayFrame.replaceChildren();
  const hints = await getData(query);
  console.log(hints);
  hints.forEach((hint) => {
    const newHint = document.createElement("div");
    newHint.textContent = hint;
    newHint.classList.add("hintItem");

    newHint.addEventListener("click", () => {
      displayFrame.replaceChildren();
      input.value = newHint.textContent;
    });
    displayFrame.appendChild(newHint);
  });
};

const inputEventHandler = (e) => {
  if (e.target.value !== "") {
    renderAutoComplete(e.target.value);
    console.log(e.target.value);
  } else {
    displayFrame.replaceChildren();
  }
};

input.addEventListener("keyup", debounce(inputEventHandler, 400));
