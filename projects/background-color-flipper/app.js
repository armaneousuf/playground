const bg = document.querySelector(".bg");
const colorBTN = document.querySelector(".color-btn");
// console.log(bg, colorBTN)

// const colors = ["red", "green", "purple", "blue", "yellow"];

// colorBTN.addEventListener("click", () => {
//   const randomColorGenerator = Math.floor(Math.random() * colors.length);
//   console.log(randomColorGenerator);
//     document.body.style.backgroundColor = colors[randomColorGenerator]
//     bg.textContent = `Background Color: ${colors[randomColorGenerator]}`;
// });

    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    colorBTN.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        // console.log(i)
        const randomColorGenerator = Math.floor(Math.random() * hex.length);
        // console.log(randomColorGenerator)
        hexColor += hex[randomColorGenerator]; 
    };

    document.body.style.backgroundColor = hexColor;
    bg.textContent = `Background Color: ${hexColor}`;
    });
