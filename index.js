document.querySelector("button").addEventListener("click", gameGenerator);

function gameGenerator(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomimg1 = "dice" + randomNumber1 + ".png";

var randomsource = "images/" + randomimg1;

document.querySelectorAll("img")[0].setAttribute("src", randomsource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomsource2 = "images/dice" +randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomsource2);

// Conditions for winners 

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else {
    document.querySelector("h1").innerHTML = "Draw !"
}

}
