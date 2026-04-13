const cardArray = [
    {
        name: 'fries', 
        img: 'images/fries.png'
    }, 
    {
        name: 'cheeseburger', 
        img: 'images/cheeseburger.png'
    }, 
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    }, 
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }, 
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
];
cardArray.sort(()=> 0.5 - Math.random());
// console.log(cardArray)

const gridDisplay = document.querySelector('.grid')
// console.log(gridDisplay)

function cardBoard () {
    for (let i = 0; i < 10; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i)
        console.log(card)
        gridDisplay.append(card)
    }
};

cardBoard()