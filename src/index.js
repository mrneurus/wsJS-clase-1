/* 
Definir una función llama es_par que reciba como
parámetro un número y retorne true si el número es par o
false si es impar.
Utilizar una función tipo arrow con una sola instrucción

*/
/* tradicional */
let es_Par = (n) => {
  if (n % 2 === 0) {
    return true;
  }
  return false;
};

/* el corto  */
let es_Par2 = (n) => n % 2 === 0;

console.log(es_Par(5));
console.log(es_Par2(5));

// Cuadrado
/* Definir una función que reciba como parámetro un
número, calcule su cuadrado y retorne si el resultado
es par o impar.
Reutilizar la función del primer ejercicio */

function cuadrado(numero) {
  let cuadrado = numero ** 2;

  if (es_Par2(cuadrado)) {
    return `El número ${cuadrado} es par`;
  } else {
    return `El número ${cuadrado} es impar`;
  }
}

console.log(cuadrado(4));

//Quien Gana ??

/* Crea una función que reciba como parámetro un
array con N cantidad de posiciones.
Recorre cada una de las posiciones y por cada valor
numérico analiza si es par o impar.
Tu función debe devolver:
- true si la mayor cantidad de números era par
- false si la mayor cantidad de números era impar
- “Empate” si existen la misma cantidad de pares
que de impares. 

*/

function quienGana(arreglo) {
  let contadorPar = 0;
  let contadorImpar = 0;
  arreglo.forEach((numero) => {
    if (es_Par2(numero)) {
      contadorPar++;
    } else {
      contadorImpar++;
    }
  });
  if (contadorPar > contadorImpar) {
    return true;
  } else if (contadorPar < contadorImpar) {
    return false;
  } else {
    return `empate`;
  }
}

let arreglo = [1, 3, 2, 4];
let arreglo2 = [1, 3, 2, 5];

console.log(quienGana(arreglo));

//super

// :)

function quien_Gana(array_num) {
  let parnum = 0,
    oddnum = 0;

  array_num.forEach((element) => {
    if (es_Par2(element)) {
      parnum++;
    } else {
      oddnum++;
    }
  });

  if (parnum > oddnum) {
    return true;
  } else if (parnum < oddnum) {
    return false;
  }
  return "empate";
}

console.log(quien_Gana(arreglo2));

let arr = [1, 2, 3, 4, 5, 6];

arr.map((item) => {
  console.log(item);
});
