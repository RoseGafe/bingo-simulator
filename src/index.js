import _ from 'lodash';

const BALL = document.getElementById("bingoNumb"); //const BALL1 = document.querySelector("#bingoNumb");
const btn = document.getElementById("btn"); //const btn1 = document.querySelector("button");
const array = _.range(1, 91);

let randomArr = _.shuffle(array);
const pcCard = randomArr.slice(0, 15);
console.log(pcCard); //había pensado en hacer un shuffle, de ahí coger los 15 primeros números para player, repetir otro shuffle y coger los 15 del pc
randomArr = _.shuffle(array);
const playerCard = randomArr.slice(0, 15);
console.log(playerCard);
// Con esto tenemos el carton del jugador y el del pc (en array)

//*TODO function showCard(element, card){}
function showCard ( element, card) {
    let newCard = document.querySelector(`.${element}`);

    for(let i of card){
        let divCard = document.createElement('div');
        divCard.className = `number number-${i}`;
        console.log(i);
         divCard.textContent = i;
        newCard.appendChild(divCard);
    }

} // no he conseguido que me funcione, me dice:
// Cannot read properties of null (reading 'appendChild')

showCard('playerCard', playerCard);
showCard('pcCard', pcCard);

function newNumber(){
    let pos = Math.floor(Math.random() * 90);
    console.log(pos);
    BALL.textContent = pos; //BALL1.textContent = pos;
}
btn.addEventListener("click", newNumber); //btn1.addEventListener("click", newNumber);

//*TODO function checkWinner(){}

