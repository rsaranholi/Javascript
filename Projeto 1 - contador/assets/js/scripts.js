console.log('hello');
var subtrair = document.getElementById('subtrair');
var adicionar = document.getElementById('adicionar');

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

subtrair.disabled = true;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
subtrair.addEventListener("click",disablebtn);
adicionar.addEventListener("click",disablebtn);


function disablebtn(){
    if (currentNumber <= 0){
        subtrair.disabled=true;

    }else
        subtrair.disabled=false;
}

