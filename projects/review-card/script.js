const persons = [
    {
        name: 'Alison', 
        title: 'Software Engineer', 
        url: 'https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam.'
    }, 
    {
        name: 'John Doe', 
        title: 'Human Resource', 
        url: 'https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam.'
    }, 
    {
        name: 'Emily', 
        title: 'Content Manager', 
        url: 'https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam.'
    }, 
    {
        name: 'Arman', 
        title: 'Software Engineer', 
        url: 'https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam.'
    }, 
    {
        name: 'Lucy', 
        title: 'Graphics Desiner', 
        url: 'https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam.'
    }
];

const url = document.querySelector('#img');
const name = document.querySelector('#name');
const title = document.querySelector('#title');
const review = document.querySelector('#review');
const btnPrevious = document.querySelector('#btn-previous');
const btnNext = document.querySelector('#btn-next');

let track = 0;
function showPerson() {
   name.textContent = persons[track].name;
   title.textContent = persons[track].title;
   url.src = persons[track].url;
   review.textContent = persons[track].review;
};

btnPrevious.addEventListener('click', ()=>{
    persons.length - 1;
});
btnNext.addEventListener('click', ()=>{
    persons.length + 1;
});