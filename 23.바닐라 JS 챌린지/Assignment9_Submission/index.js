const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const colorsLength = colors.length;
const body = document.querySelector("body");
const btn = document.getElementById("changeColorBtn");

function setRandomColor() {
  const materialColor1 = colors[Math.floor(Math.random() * colorsLength)];
  const materialColor2 = colors[Math.floor(Math.random() * colorsLength)];
  const randomColor = `linear-gradient(to right, ${materialColor1},${materialColor2})`;
  // to top, to bottom, to right, to left, to top right -> 그라데이션 방향 정하는 속성들

  return randomColor;
}

function doChangeColor() {
  body.style.background = setRandomColor();
}

doChangeColor();
btn.addEventListener("click", doChangeColor);
