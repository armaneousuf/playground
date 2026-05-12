const color = document.querySelector(".color");
const btn = document.querySelector(".btn");

const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function generateHexColor() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * hexColor.length);
    hex = hex + hexColor[random];
  }
  return hex;
}

btn.addEventListener('click', () => {
    const newColor = generateHexColor();
    color.textContent = newColor;
    document.body.style.backgroundColor = newColor;
})