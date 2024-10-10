console.log('File Javascript collegato correttamente')
/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function(l1, l2) {
    console.log('Area del rettangolo di lati ', + l1, ' e ', + l2, ' vale: ', l1*l2
    )
}

area(3,4)//Chiamata della funzione area in cui passo come parametri l1 e l2 i valori 3 e 4. Come risultato leggo in console che l'area del rettangolo vale 12

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function(num1, num2) {
    if (num1 !== num2){
        return (num1 + num2)
    } else {
        return (3*(num1+num2))
    }
}

let result = crazySum(3,3)
console.log('crazySum ritorna: ', + result)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function(num1, num2) {
    if(num1>num2){
        return Math.abs ((num1-num2)*3)
    } else {
        return Math.abs(num1 - num2)
    }
}

let resultDiff = crazyDiff(18, 19)
console.log('crazyDiff vale: ', + resultDiff)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function(n) {
    if((n > 20 && n <= 100) || n === 400) {
        return true
    }
}

let anotherResult = boundary(400)

if (anotherResult === true){
    console.log('Il numero inserito è compreso tra 20 e 100 (incluso) oppure è uguale a 400')
} else {
    console.log('Il numero inserito non è compreso tra 20 e 100 (incluso) e non è uguale a 400')
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let string = 'EPICODE FULL STACK'

// console.log(string.slice(0,7))

const epify = function(str) {
    if(str.slice(0,7) === 'EPICODE' ) {
        return str
    } else {
        return 'EPICODE' + str
    }
}

let epifyResult = epify('RS')
console.log(epifyResult)

/* ESERCIZIO 6 
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function(n) {
    if (n%3 === 0 ||  n%7 === 0){
        return true
    } else {
        return false
    }
}

let check3and7Result = check3and7(21)
if (check3and7Result === true) {
    console.log('Il numero inserito è multiplo di 3 o di 7')
} else {
    console.log('Il numero inserito non è multiplo di 3 o di 7')
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function(str) {
    const string = str.split('')//Con questo metodo creo un array 'string' i cui elementi sono i singoli caratteri della stringa inserita
    const strReverse = string.reverse()//inverte la posizione degli elementi dell'array 'string' e li salva in un nuovo array 'strReverse'
    const joinArrayReverse = strReverse.join('')//unisce in un unica parola i caratteri dell'array invertito 'strReverse' salvando la stringa ottenuta nella variabile 'joinArrayReverse'
    return joinArrayReverse
}

let reverseResult = reverseString('1001001')//è il 73 in rappresentazione binaria, è un palindromo
console.log(reverseResult)


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let string = 'this is a test'
const upperFirst = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1,4) + ' ' + str.charAt(5).toUpperCase() + str.slice(6,7) + str.slice(7,8) + str.charAt(8).toUpperCase() + str.slice(9,10) + str.charAt(10).toUpperCase() + str.slice(11)
}

console.log(upperFirst(string))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function(str) {
    return str.slice(1,str.length-1)
}

console.log(cutString('vvediamo sef'))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function(n) {
    const randomArray = []
    for(let i=0; i<n; i++) {
        randomArray.push(Math.floor(Math.random()*11))
        console.log('Numero ', i+1, ': ' + randomArray[i])
    }
    return randomArray
}

console.log('I numeri estratti sono: ', giveMeRandom(3))

// Variante per SuperEnalotto
// const giveMeRandom = function(n) {
//     const randomArray = []
//     for(i=0; i<n; i++) {
//         randomArray.push(Math.floor(Math.random()*91))
//         console.log('Numero ', i+1, ': ' + randomArray[i])
//     }
//     return randomArray
// }

// console.log('I numeri estratti sono: ', giveMeRandom(6))