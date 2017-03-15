console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";

var cardTwo = "king";

var cardThree = "king";

var cardFour = "queen";

/*if (cardOne === cardFour) {
	alert('Wahoo! You got a match!');
} else if (cardTwo === cardThree) {
	alert('Wahoo! You got a match!');
} else {alert('Sorry, try again.')
*/

var gameBoard = document.getElementById('game-board');

var createCards = function (){
for (var i=0; i<4; i++){
	var newCard = document.createElement('div');
	newCard.className = 'card';
	gameBoard.appendChild(newCard);
}}

createCards ();