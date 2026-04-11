const buttons = document.querySelectorAll('button');
const listItems = document.querySelector('.list-items');

buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.parentNode.remove();
    })
})