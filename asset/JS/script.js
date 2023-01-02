
// Definizioni variabili per agganciare gli elementi del DOM
// Bottoni +, - e reset e display contatore
let display = document.getElementById('display')
let add = document.getElementById('add')
let reduce = document.getElementById('reduce')
let reset = document.getElementById('reset')



// definzione e aggiunta funzionalità ai bottoni + e - e reset

add.addEventListener('click', addNumber);
reduce.addEventListener('click', reduceNumber);


let i = 0;


// definzione addNumber per aggiungere numero

function addNumber() {

    display.innerHTML = ++i;
}

// definzione reduceNumber per diminuire numero

function reduceNumber() {

    display.innerHTML = --i;
}


// definzione resetNumber per portare contatore a zero

reset.addEventListener('click', resetNumber);

function resetNumber() {
    i = 0;
    display.innerHTML = i;
}

