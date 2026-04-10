const btn = document.querySelector('button');
console.log(btn.parentNode);
console.log(btn.previousSibling);
console.log(btn.nextSibling);
console.log(btn.previousElementSibling);

const body = document.querySelector('body');
console.log(body.parentNode?.parentNode?.parentNode?.parentNode)