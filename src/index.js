import _ from 'lodash';

const BALL = document.getElementById("bingoNumb");
const BTN = document.getElementById("btn");
const RESTART = document.getElementById("btnStart");
let numbers; //Array con todos los números del bingo.

//Cards
const PLAYER = document.getElementById("player");
const PC = document.getElementById("pc");

let player1Card;
let pc1Card;
//Contadores de números tachados de cada jugador.
let playerChecked;
let pcChecked;

function createCard(playerCard){
    let pos =  Math.floor(Math.random() * numbers.length); //Obtenemos una posición aleatoria de la array de números.
    playerCard.push(numbers[pos]); //El primero nunca estará repetido así que se añade a la array de la card que se ha pasado por el parametro.
    //Para los otros 14 números se vuelve a cambiar la posición, si el número que esta en esta ya se encuentra en la array de la card se cambia la variable hasta que no coincida.
    for (let i = 1; i <= 14; i++) {
        pos =  Math.floor(Math.random() * numbers.length);
        while(playerCard.includes(numbers[pos])){
            pos =  Math.floor(Math.random() * numbers.length);
        }
        playerCard.push(numbers[pos]);
    }
    
}

function showCard(element, card){
    let count = 0;
    for (let i = 0; i <= 2; i++) { //Bucle de para las 3 líneas.
        let row = document.createElement('div'); //Se crea un div para cada una.
        row.className = 'row';
        element.appendChild(row); //Y se añade al elemento, en este caso div, que hemos pasado como parametro.
        for (let j = 0; j <= 4; j++) { //Por cada fila hay 5 números
            let num = card[count]; //Obtenemos el número del array que pasamos como parametro que se encuentra en la posición del contador.
            let div = document.createElement('div');
            div.classList.add('number');
            div.classList.add('number' + num); //Añadir una clase que indique su número.
            div.textContent = num;
            row.appendChild(div); //Añadimos el número al div y el div a la fila.
            count++;
        }
    }

}


//Cada vez que se saque un número se comprueba si hay ganador
function checkWinner(num){
    //Como esto practicamente se repite para los dos jugadores, se puede hacer una función aparte.

    //Si la tarjeta del jugador tiene el número en el array, se comprueba que div es, 
    //le añadimos la clase checked, sumamos a su contador de tachados y si este ha llegado a 15, el jugador a ganado.
    if(player1Card.includes(num)){  
        for (let i = 0; i < player1Card.length; i++) {
            if(player1Card[i] == num){
                let element = document.querySelector('#player .number'+num);
                element.classList.add('checked');
                playerChecked++;
                if(playerChecked == 15){
                    document.getElementById('result').textContent="HAS GANADO";
                    BTN.disabled = true;
                }
            }
        }
    }
    if(pc1Card.includes(num)){
        for (let i = 0; i < pc1Card.length; i++) {
            if(pc1Card[i] == num){
                let element = document.querySelector('#pc .number'+num);
                element.classList.add('checked');
                pcChecked++;
                if(pcChecked == 15){
                    document.getElementById('result').textContent="HAS PERDIDO";
                    BTN.disabled = true;
                }
            }
        }
    }

    //No he añadido empate, ya que no se si gana el primero que dice bingo...   

}
//Obtener número aleatorio de la array
function newNumber(){
    //Si aun quedan números:
    if(numbers.length > 0){
        let pos = Math.floor(Math.random() * numbers.length); //Obtenemos una posición de la array.
        BALL.textContent = numbers[pos]; //Escribimos en el div el número que se encuentra en la posición de la array.
        checkWinner(numbers[pos]);
        numbers.splice(pos,1); //Borramos de la array el número que se encuentra en la posición.
    }else{
        //Si no quedan números en el array, se avisa en el div.
        BALL.textContent = "No quedan números";
    }
    
}

function start(){
    //Borramos el posible contenido de los div donde van las tarjetas, iniciamos todos las variables y cremos las tarjetas.
    PLAYER.innerHTML = '';
    PC.innerHTML = '';
    BTN.disabled = false;
    document.getElementById('result').textContent='';
    BALL.textContent = '';
    numbers = _.range(1, 91);
    player1Card = [];
    pc1Card = [];
    playerChecked = 0;
    pcChecked = 0;
    createCard(player1Card);
    createCard(pc1Card);
    showCard(PLAYER, player1Card);
    showCard(PC,pc1Card);

}
//Recordar que no se puede llamar a una función que esta declarada más tarde.
BTN.addEventListener("click", newNumber);
RESTART.addEventListener("click", start);
window.onload = start;


