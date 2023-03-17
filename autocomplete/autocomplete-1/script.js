const displayField = document.querySelector(".display");
const input = document.querySelector("input");
const hints = ["aba", "aca", "abc", "sdf"];

const renderHint = async (value) => {
  displayField.replaceChildren();
  const newHinds = await getHints(value);
  console.log(newHinds);
  if (newHinds.length !== 0) {
    newHinds.forEach((hint) => {
      const hintDiv = document.createElement("div");
      hintDiv.textContent = hint;
      displayField.appendChild(hintDiv);
    });
  } else {
    const hintDiv = document.createElement("div");
    hintDiv.textContent = "No related item.";
    displayField.appendChild(hintDiv);
  }
};

//keyup
input.addEventListener("keyup", (e) => {
  if (e.target.value !== "") {
    renderHint(e.target.value);
  } else {
    displayField.replaceChildren();
  }
});
