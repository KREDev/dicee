document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
document.querySelector(".img2").setAttribute("src", "./images/dice6.png");

var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

// if(randomNumber1 === 1) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
// }
// else if(randomNumber1 === 2) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
// }
// else if(randomNumber1 === 3) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
// }
// else if(randomNumber1 === 4) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
// }
// else if(randomNumber1 === 5) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
// }
// else if(randomNumber1 === 6) {
//     document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
// }

document.querySelector(".img1").setAttribute("src", './images/dice'+randomNumber1+'.png');
document.querySelector(".img2").setAttribute("src", './images/dice'+randomNumber2+'.png');

if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "It's a draw!";
}  
else if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 1 win!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").innerHTML = "Player 2 win!";
}