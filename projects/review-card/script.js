const persons = [
    {
        name: 'Alison', 
        title: 'Software Engineer', 
        url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam.'
    }, 
    {
        name: 'John Doe', 
        title: 'Human Resource', 
        url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam.'
    }, 
    {
        name: 'Emily', 
        title: 'Content Manager', 
        url: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam.'
    }, 
    {
        name: 'Arman', 
        title: 'Software Engineer', 
        url: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=301&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam.'
    }, 
    {
        name: 'Lucy', 
        title: 'Graphics Desiner', 
        url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam.'
    }
];

const urlEl = document.querySelector('#img');
const nameEl = document.querySelector('#name');
const titleEl = document.querySelector('#title');
const reviewEl = document.querySelector('#review');
const btnPrevious = document.querySelector('#btn-previous');
const btnNext = document.querySelector('#btn-next');

let track = 0;
function showPerson() {
   nameEl.textContent = persons[track].name;
   titleEl.textContent = persons[track].title;
   urlEl.src = persons[track].url;
   reviewEl.textContent = persons[track].review;
};

btnNext.addEventListener('click', ()=>{
    track++; 
    if(track === persons.length){
        track = 0;
    }
    showPerson()
});

btnPrevious.addEventListener('click', ()=>{
    track--;
    if(track < 0){
        track = persons.length - 1;
    }
    showPerson()
});

showPerson();