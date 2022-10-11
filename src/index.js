import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const type = {
  minus: "MINUS",
  add: "ADD",
};

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case type.add:
      return count + 1;
    case type.minus:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

add.addEventListener("click", () => countStore.dispatch({ type: type.add }));
minus.addEventListener("click", () =>
  countStore.dispatch({ type: type.minus })
);
