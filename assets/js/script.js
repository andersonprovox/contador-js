var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    } 
}

function disableIncrement() {
    if(currentNumber > 10){
        document.getElementById('adicionar').style.display = 'none';
    } else {
        document.getElementById('adicionar').style.display = 'inline';
    }
}


var incrementButton = document.getElementById('adicionar');
incrementButton.addEventListener('click', increment, false);
incrementButton.addEventListener('click', disableIncrement, false);

var decrementButton = document.querySelector('#subtrair');
decrementButton.addEventListener('click', decrement, false);
decrementButton.addEventListener('click', disableIncrement, false);