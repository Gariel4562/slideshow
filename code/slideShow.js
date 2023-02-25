'use strict';

// imagens que aparecerão na tela v

const images = [
    { 'id': '1', 'url':'./img/samurai01.jpg' },
    { 'id': '2', 'url':'./img/samurai02.jpg' },
    { 'id': '3', 'url':'./img/blood03.jpg' },
    { 'id': '4', 'url':'./img/samurai04.webp' },
    { 'id': '5', 'url':'./img/Ashita-no-joe05.png' },
]


// Div que receberá as imagens v 

const container = document.getElementById(`container-items`);



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

loadImages( images, container );