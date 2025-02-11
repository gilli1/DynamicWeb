'use strict';

const themaKnop = document.getElementById('themaKnop');
const body = document.body;

themaKnop.addEventListener('click', () => {
const isDonker = body.style.backgroundColor === 'black';

    body.style.backgroundColor = isDonker ? 'white' : 'black';
    body.style.color = isDonker ? 'black' : 'white';
    
    const links = document.getElementsByTagName('a');
    for (let link of links) {
        link.style.color = isDonker ? 'blue' : 'lightblue';
    
    }
    
    themaKnop.textContent = isDonker ? 'Donker thema' : 'Licht thema';

});

