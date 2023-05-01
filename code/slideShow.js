'use strict';

// imagens que aparecerão na tela v

const images = [
    { 'id': '1', 'url':'./img/samurai01.jpg' },
    { 'id': '2', 'url':'./img/samurai02.jpg' },
    { 'id': '3', 'url':'./img/blood03.jpg' },
    { 'id': '4', 'url':'./img/samurai04.webp' },
    { 'id': '5', 'url':'./img/Ashita-no-joe05.jpg' },
]


// Div que receberá as imagens v 

const containerItems = document.getElementById(`container-items`);



// Para carregar as imagens v

const loadImages = (images, container) => {
   images.forEach ( image => {
     container.innerHTML += ` 
     <div class= 'item'>
        <img src='${image.url}'
     </div>
     
     `
   } )
}



loadImages( images, containerItems );

// pegando todos os items v

let items = document.querySelectorAll(`.item`);

const previous = () => {
   containerItems.appendChild(items[0]);
   items = document.querySelectorAll(`.item`);

}

const next = () => {
   const lastItem = items[items.length - 1 ];
   containerItems.insertBefore( lastItem, items[0]);
   items = document.querySelectorAll(`.item`);
}

// Quando clicar realizará as funções 'previous' ou 'next' que está logo acima.

document.querySelector(`#previous`).addEventListener(`click`, previous);
document.querySelector(`#next`).addEventListener(`click`, next);

