const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let FirstCard, secondCard;
let lockBoard = false;


function flipCard(){
    if(lockBoard) return;
    if(this === FirstCard)return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard=true;
        FirstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard=false;
    checkForMath();
}


function checkForMath(){
    if(FirstCard.dataset.card===secondCard.dataset.card){
    disableCards();
    return;
    }
    unflipCard();
}

function disableCards(){
    FirstCard.removeEventListener('click', flipCard);
    SecondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCard(){
    lockBoard = true;
    setTimeout(()=>{
        FirstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard();
    },1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [FirstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach((card)=>{
        let randomPosition = Math.floor(Math.random()*12);
        card.style.order = randomPosition;
    })
})(); //Função imediata ao carregar a pagina

cards.forEach((card)=>{
    card.addEventListener('click',flipCard)
})

