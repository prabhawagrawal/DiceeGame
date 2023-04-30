function btnClicked(){

    var winSound = document.getElementById("winSound");

    winSound.pause();
    winSound.currentTime = 0;

    var img1 = document.getElementsByClassName("img1")[0];
    var img2 = document.getElementsByClassName("img2")[0];
    var h1 = document.querySelector("h1");

    var randomNumber1 = Math.floor(Math.random()*6+1);
    var randomNumber2 = Math.floor(Math.random()*6+1);
    console.log(randomNumber1);
    console.log(randomNumber2);

    img1.src = "images/dice" + randomNumber1 + ".png";
    img2.src = "images/dice" + randomNumber2 + ".png";

    if(randomNumber1>randomNumber2){
        h1.innerHTML = "Player 1 Wins ✨";
        document.getElementsByClassName("btn")[0].setAttribute("style", "font-size: 2rem;");
    }

    if(randomNumber2>randomNumber1){
        h1.innerHTML = "Player 2 Wins 🎉";
        document.getElementsByClassName("btn")[0].setAttribute("style", "font-size: 2rem;");
    }

    if(randomNumber1 == randomNumber2){
        h1.innerHTML = "It's a DRAW!! 🔄️";
        document.getElementsByClassName("btn")[0].setAttribute("style", "font-size: 2rem;");
    }
    
    winSound.play();

}