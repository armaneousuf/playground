const displayInput = document.querySelector('.display');

function appendToDisplay(input){
    displayInput.value += input;
}

function clearDisplay(){
    displayInput.value = ''
}

function calculate(){
    try {
        displayInput.value = eval(displayInput.value);
    } catch (error){
        displayInput.value = error;
    }
}