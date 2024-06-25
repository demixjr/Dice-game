document.body.addEventListener("click", game);

function game(){
    document.querySelector("h2").style.visibility="Hidden";

    do{
    var randomNumber1 = Math.round(Math.random()*6);
    var randomNumber2 = Math.round(Math.random()*6);
    }
    while(randomNumber1===0 || randomNumber2===0)
    
    var pic1 = "images/dice"+randomNumber1+".png";
    var pic2 = "images/dice"+randomNumber2+".png";

    document.querySelector(".img1").setAttribute("src",pic1);
    document.querySelector(".img2").setAttribute("src",pic2);

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent="Player 1 wins!";
    }
    else if(randomNumber1<randomNumber2){
        
        document.querySelector("h1").textContent="Player 2 wins!";
    }
    else{
        
        document.querySelector("h1").textContent="Draw!";
    }
    }