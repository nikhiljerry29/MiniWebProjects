let playerOneDiceValue = Math.floor(Math.random() * 6) + 1;
let playerOneImagePath = "images/dice" + playerOneDiceValue + ".png";
document.querySelector("div img.img1").setAttribute("src", playerOneImagePath)

let playerTwoDiceValue = Math.floor(Math.random() * 6) + 1;
let playerTwoImagePath = "images/dice" + playerTwoDiceValue + ".png";
document.querySelector("div img.img2").setAttribute("src", playerTwoImagePath)

let resultHeading = document.querySelector("h1")
if(playerOneDiceValue > playerTwoDiceValue)
	resultHeading.innerText = "Player 1 Wins!!"
else if (playerOneDiceValue < playerTwoDiceValue)
	resultHeading.innerText = "Player 2 Wins!!"
else
	resultHeading.innerText = "Draw!!"