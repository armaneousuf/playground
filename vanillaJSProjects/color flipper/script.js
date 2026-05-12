const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', () => {
    let hex = '#';
    for (let i = 0; i < 6; i++){
        hex += hexColor[randomColorGenerator()];
    }

    document.body.style.backgroundColor = hex;
    color.textContent = hex;
});

function randomColorGenerator(){
    return random = Math.floor(Math.random() * hexColor.length)
}