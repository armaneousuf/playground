const cardArray = [
    {
        name: 'fries', 
        img: 'images/fries.png'
    }, 
    {
        name: 'fries', 
        img: 'images/fries.png'
    }, 
    {
        name: 'cheeseburger', 
        img: 'images/cheeseburger.png'
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
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    }, 
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
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
        name: 'pizza',
        img: 'images/pizza.png'
    }, 
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
];
cardArray.sort(()=> 0.5 - Math.random());
// console.log(cardArray)

const gridDisplay = document.querySelector('.grid');
const resultDisplay = document.querySelector('.result');
// console.log(gridDisplay)
let cardChosen = [];
let cardChosenIds = [];
const cardWon = [];

function cardBoard () {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        // console.log(card);
        gridDisplay.append(card);
        card.addEventListener('click', flipCard);
    } 
};

function checkMatch () {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];

    if(optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png'); // here is an error
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You clicked the same image')
    }

    console.log("Check for match");
    if (cardChosen[0] === cardChosen[1]){
        alert('You found your match');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardWon.push(cardChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
    }

    resultDisplay.textContent = cardWon.length

    cardChosen = [];
    cardChosenIds = []; 

    if (cardWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulation! You found them all.'
    }
}

cardBoard();

function flipCard () {
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    // console.log(cardChosen)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}