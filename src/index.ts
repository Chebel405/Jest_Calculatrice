import Calculatrice from  "./Calculatrice/Calculatrice"; 
import { peutJouer,verifierPrix } from "./JustePrix/justePrix"; 
import {questionInt} from 'readline-sync';



const justePrix = 500;

let nombreVie = 10;
let message= '';

while(peutJouer(nombreVie) && message != "C'est gagné"){
    let prix = questionInt(`Quel est le prix à deviner ?(il reste ${nombreVie} vies \n )`)
    message = verifierPrix(prix, justePrix);
    nombreVie--;
    console.log(message);
}

// console.log("Coucou");
// let res = Calculatrice.division(24, 0)

// console.log(res);