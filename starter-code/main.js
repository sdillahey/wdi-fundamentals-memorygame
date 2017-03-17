console.log("JS file is connected to HTML! Woo!")

/*var cardOne = "queen";

var cardTwo = "king";

var cardThree = "king";

var cardFour = "queen";*/

/*if (cardOne === cardFour) {
	alert('Wahoo! You got a match!');
} else if (cardTwo === cardThree) {
	alert('Wahoo! You got a match!');
} else {alert('Sorry, try again.')
*/

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createCards = function (){
for (var i=0; i<cards.length; i++){
	var newCard = document.createElement('div');
	newCard.className = 'card';
	newCard.setAttribute('data-card',cards[i]);
	newCard.addEventListener('click',isTwoCards);
	gameBoard.appendChild(newCard);
}}



var isTwoCards = function (){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card')==='queen') {
			this.innerHTML = "<img src ='queen.png' alt = 'Queen' style='width:60px;height:60px'>";
}			else {this.innerHTML = "<img src ='king.jpg' alt = 'King' style='width:60px;height:60px'>";
		}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

var isMatch = function (cardsInPlay) {
 if (cardsInPlay[0]===cardsInPlay[1]){
 	alert('Wahoo! You got a match!');
 } else alert('Sorry, try again!');
 	this.innerHTML = " ";
 	cardsInPlay = [];
}

createCards ();