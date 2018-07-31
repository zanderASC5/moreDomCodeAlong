const smileyFace1= document.getElementById('first');

smileyFace1.remove();

const newImg = document.createElement('img');

const mainContainer = document.querySelector('.main-container');
newImg.src= 'assets/cry.png' ;

mainContainer.appendChild(newImg);
mainContainer.appendChild(smileyFace1)