import { colors as perebi } from "./colors.js";

export default function getRandomColor() {
  return perebi[Math.floor(Math.random() * perebi.length)];
}

export function setColor(square) {
  const color = getRandomColor();
  square.style.background = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// remove color from square div
export function removeColor(square) {
  square.style.background = "#201e1e";
  //   square.style.boxShadow = `0 0 2px #201e1e`;
}
