import _ from 'lodash';

const BALL = document.getElementById("bingoNumb"); //const BALL1 = document.querySelector("#bingoNumb");
const btn = document.getElementById("btn"); //const btn1 = document.querySelector("button");
const array = _.range(1, 91);

let randomArr = _.shuffle(array);
console.log(randomArr); //había pensado en hacer un shuffle, de ahí coger los 15 primeros números para player, repetir otro shuffle y coger los 15 del pc
let numb = randomArr[0];
console.log('es '+ numb);

// *! borrad los comentarios que queráis, que he ido divagando un poco

//let playerCard = document.querySelector("player");
//const div = createElement("div");
//div.textContent = numb;

//playerCard.className = "player-card";

let card = document.createElement("div");
card.className = `number number-${numb}`; //no sé si esto valdría para poner el número en la clase

//*TODO function showCard(element, card){}

function newNumber(){
    let pos = Math.floor(Math.random() * 90);
    console.log(pos);
    BALL.textContent = pos; //BALL1.textContent = pos;
}
btn.addEventListener("click", newNumber); //btn1.addEventListener("click", newNumber);

//*TODO function checkWinner(){}

