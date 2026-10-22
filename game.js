/*
    0   1   2
    3   4   5
    6   7   8




*/
const pole = document.getElementById("game");
pole.innerText = "";
let hrac = true;
let gameOngoing = false;
for(let y=0; y<3; y++){
    const Row = document.createElement("tr");
    for(let x=0; x<3; x++){
        const tlacitko = document.createElement("td");
        let cislo = x + y*3;
        tlacitko.addEventListener("click", event => {
            if(!tlacitko.innerText) {
                tlacitko.innerText = (hrac === true ? "X" : "O");
                hrac = !hrac;
            }
        })
        Row.appendChild(tlacitko);
    }
    pole.appendChild(Row);
}
gameOngoing = true;
function resolveGame(policecko, pismenko) {
    if(!gameOngoing){
        return false;
    }
    for(let policecicko = 0; policecicko < 3; policecicko++) {
        if ((policecko) % 3 == 0) {

        }
    }
}