import _ from 'lodash';

const BALL = document.getElementById("bingoNumb");
const btn = document.getElementById("btn");
const array = _.range(1, 91);




function newNumber(){
    let pos = Math.floor(Math.random() * 90);
    console.log(pos);
    BALL.textContent = pos;
}
btn.addEventListener("click", newNumber);
