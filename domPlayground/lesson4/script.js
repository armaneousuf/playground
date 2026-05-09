document.querySelector("h1").textContent = "Hello world from DOM";
document.body.style.backgroundColor = 'lightblue';

document.getElementById('btn').addEventListener('click', handleclick);

function handleclick() {
    alert('Button clicked!');
}

document.title = 'DOM Manipulation';

const newItem = document.createElement('div');
newItem.className = 'item';
document.body.append(newItem);

document.querySelector('.item').textContent = 'This div created by JavaScript';