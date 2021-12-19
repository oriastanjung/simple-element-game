const elementPlayer = ["./earth.png" , "./fire.png", "./thunder.jpg", "./water.jpg" , "./wind.png"]
const elementMusuh = ["./earth.png" , "./fire.png", "./thunder.jpg", "./water.jpg" , "./wind.png"]
const letakUndi = document.getElementById("btn-undi");
const letakGambarPilihanPlayer = document.getElementById("gambarPilihanPlayer");
const letakGambarPilihanMusuh = document.getElementById("gambarPilihanMusuh")
const letakResult = document.getElementById("result")

let ElementPlayer;
let ElementMusuh;

function cliCkToUndiPlayer(){
    let random = Math.floor(Math.random() *5);
    letakGambarPilihanPlayer.setAttribute("src", elementPlayer[random]);
    ElementPlayer = random;
}
function clickToUndiMusuh(){
    let random = Math.floor(Math.random() *5);
    letakGambarPilihanMusuh.setAttribute("src", elementMusuh[random]);
    ElementMusuh = random;
}

function check(x,y){
    if(x == 0 && y == 3){
        letakResult.innerHTML = "You Win"
    }else if(x == 0 && y != 2){
        letakResult.innerHTML = "You Draw"
    }else if(x == 0 && y == 2) {
        letakResult.innerHTML = "You Lose"
    }

    if(x == 1 && y == 4){
        letakResult.innerHTML = "You Win"
    }else if(x == 1 && y != 3){
        letakResult.innerHTML = "You Draw"
    }else if(x == 1 && y == 3) {
        letakResult.innerHTML = "You Lose"
    }

    if(x == 2 && y == 0){
        letakResult.innerHTML = "You Win"
    }else if(x == 2 && y != 4){
        letakResult.innerHTML = "You Draw"
    }else if(x == 2 && y == 4) {
        letakResult.innerHTML = "You Lose"
    }

    if(x == 3 && y == 1){
        letakResult.innerHTML = "You Win"
    }else if(x == 3 && y != 0){
        letakResult.innerHTML = "You Draw"
    }else if(x == 3 && y == 0) {
        letakResult.innerHTML = "You Lose"
    }

    if(x == 4 && y == 2){
        letakResult.innerHTML = "You Win"
    }else if(x == 4 && y != 1){
        letakResult.innerHTML = "You Draw"
    }else if(x == 4 && y == 1) {
        letakResult.innerHTML = "You Lose"
    }
}

letakUndi.addEventListener("click",() => {
    cliCkToUndiPlayer()
    clickToUndiMusuh()
    check(ElementPlayer ,ElementMusuh);
})