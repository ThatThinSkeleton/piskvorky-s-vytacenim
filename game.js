/*
    0   1   2
    3   4   5
    6   7   8

    u prvni rady:
    kdyz pole > 2, minus pole - 2


*/
const pole = document.getElementById("game");
pole.innerText = "";
let hrac = true;
let gameOngoing = false;
let debug = true;
for(let y=0; y<3; y++){
    const Row = document.createElement("tr");
    for(let x=0; x<3; x++){
        const tlacitko = document.createElement("td");
        let cislo = x + y*3;
        tlacitko.addEventListener("click", event => {
            if(!tlacitko.innerText) {
                tlacitko.innerText = (hrac === true ? "X" : "O");
                if(resolveGame(x + 3*y)){
                    const vyhra = document.getElementById("vyhra");
                    vyhra.innerText = (hrac === true ? "X" : "O") + " vyhral!"
                }
                hrac = !hrac;
            }
        })
        Row.appendChild(tlacitko);
    }
    pole.appendChild(Row);
}
const hraciPole = pole.getElementsByTagName("td");
gameOngoing = true;
function resolveGame(policecko, y) {
    if(!gameOngoing){
        return false;
    }
    const limita = y*3-1;
    const polickarow = [];
    //rada
    for(let i = 0; i<3; i++){
        if(policecko + i > y*3-1) {
            polickarow[i] = -(policecko + i - (y * 3 - 1));
        }
        else {
            polickarow[i] = 0;
        }
    }
    const deficit = (policecko > limita ? -(policecko - limita) : 0);
    if(debug){
        console.log("Pole: " + policecko + " Deficity:");
        for(let i = 0; i < 3; i++){
            console.log(deficit[i]);
        }
    }
    if(checkRow(policecko, deficit)){
        return true;
    }
    return false;
}
function checkRow(policecko, deficit){
    return hraciPole[policecko - deficit[0]].innerText == hraciPole[policecko - deficit[1]].innerText && hraciPole[policecko - deficit[1]].innerText == hraciPole[policecko - deficit[2]].innerText;
}