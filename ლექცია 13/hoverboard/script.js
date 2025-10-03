import { setColor, removeColor } from "./lib/getRandomcolor.js";

const cotainer = document.getElementById("container");
const SQUARES = 4020;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  // mouseouver call setcolor
  square.addEventListener("mouseover", () => setColor(square));
  // mouse out call removeColor
  square.addEventListener("mouseout", () => removeColor(square));
  cotainer.appendChild(square);
}
