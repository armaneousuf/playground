const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn-containers .btn');
const counter = document.querySelector('.counter')

// console.log(value, btns);

let count = 0;

btns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click', (e) => {
        const targetClass = e.currentTarget.classList;
        // console.log(targetClass);
        if(targetClass.contains('increase')){
            count++;
        }

        else if(targetClass.contains('decrease')){
            count--;
        } 

        else {
            count = 0;
        }

        updateDisplay()
    })
})

function updateDisplay() {
    value.textContent = count;
    
    if(count > 0){
    counter.textContent = 'Counter increasing'
    } 

    else if(count < 0){
        counter.textContent = 'Counter decreasing'
    }

    else {
        counter.textContent = 'Counter reset'
    }
}