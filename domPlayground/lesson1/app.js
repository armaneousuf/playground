const lis = document.getElementsByClassName('li');
console.log(lis);

Array.from(lis).forEach((li) => {
    console.log(li)
    console.log(lis.length)
})