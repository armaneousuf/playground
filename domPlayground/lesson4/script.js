document.querySelector("h1").textContent = "Hello world from DOM";
document.body.style.backgroundColor = 'lightblue';

document.getElementById('btn').addEventListener('click', handleclick);

function handleclick() {
    const ul = document.querySelector('ul');
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 1000; i++){
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        fragment.append(li);
    }

    ul.append(fragment);
}

document.title = 'DOM Manipulation';

const newItem = document.createElement('div');
newItem.className = 'item';
document.body.append(newItem);

document.querySelector('.item').textContent = 'This div created by JavaScript';
