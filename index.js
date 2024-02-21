document.querySelector("button").addEventListener("click", gameGenerator);

function gameGenerator(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomsource = "dice" + randomNumber1 + ".jpg";

document.querySelectorAll("img")[0].setAttribute("src", randomsource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomsource2 = "dice" +randomNumber2 + ".jpg";

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
