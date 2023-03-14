/* 
Exercice 1

la valeur de C à la fin de cet algorithme est 24.

Exercice 2

la valeur de C à la fin de cet algorithme est "12312" 

*/

// Exercice 3 

function ex3 () {
    
    const prixHT = parseFloat(prompt ("donne moi le prix hors taxe de l'objet"));

    const prixTTC = prixHT * 1.196;
    
   console.log('Le prix TTC est de' + prixTTC +'euros')
}

ex3()


// Exercice 4 

function ex4 () {

    const prenom = prompt("Entrez votre prénom");

    const nom = prompt("Entrez votre nom");
    
    console.log('Bonjour '+prenom + ' votre nom est ' +nom);
}

ex4()

// Exercice 5 

function ex5 () {

    const nombreA = parseFloat(prompt("Entrez le premier nombre"));

    const nombreB = parseFloat(prompt("Entrez le deuxième nombre"));

    const produit = nombreA * nombreB;

    if (produit > 0) {

      console.log("La multiplication est positif");

    } 
    
    else if (produit < 0) {

      console.log("La multiplication est négatif");

    }
    
    else {

      console.log("La multiplication est nul");
    }
}

ex5()

// Exercice 6 

function ex6 () {

    let age = prompt("Quel est votre âge ?");

    if (age < 13) {

     console.log("Regardez Action Man");

    } else if (age >= 13 && age <= 18) {

     console.log("Regardez Matrix");
    } else {

     console.log("Regarder Evil Dead");
    }

}

ex6()


// Exercice 7 


function ex7() {

    let nombre = -1; 
    
    let nombreRandom = Math.floor(Math.random() * 11);
    
    while (nombre !== nombreRandom) {
      nombre = parseInt(prompt("Devinez un nombre entre 0 et 10 :"));
    }
    console.log("Bravo vous avez deviné" + nombreRandom);
}

ex7()


// Exercice 8 

function ex8() {

    let nombre = parseInt(prompt("Donnez un chiffre"));
      
    if (nombre === 0 ) {
        console.log(0);
    }
    
    for (let i = nombre; i >= 0 ; i--) {
        console.log(i);
    }

}

ex8()


// Exercie 9 


function ex9() {

    const nombreRandom = Math.floor(Math.random() * 100) + 1;

    let nombre = -1;

    while (nombre !== nombreRandom ) {

      nombre = parseInt(prompt("Devinez un chiffre entre 1 et 100"));
  
      if (nombre < nombreRandom) {
        
        console.log("plus grand.");

      } else if (nombre > nombreRandom) {

        console.log("plus petit");
      }
    }

    console.log('Bravo!');
}

ex9()


// Exercice 10 


function ex10 (array) {

    let sum =  0
    
    for ( var i = 0 ; i < array.length ; i++) {
    
    sum += array[i]
    }
    
    console.log(sum);
}

ex10()

// Exercice 11 


function ex11 () {

    var nb = parseInt(prompt("Entrez le nombre d'élèves de la classe "));

    var notes = [];

    for (var i = 0; i < nb ; i++) {

      var note = parseInt(prompt("Entrez la note de l'élève " + (i+1)));

      notes.push(note); 
    }

    console.log(notes);

}

ex11()

// Exercice 12


function ex12() {

    var nb = parseInt(prompt("Entrez le nombre d'élèves de la classe "));

    var notes = [];

    nbmoyenne = 0;

    for (var i = 0; i < nb ; i++) {

      var note = parseInt(prompt("Entrez la note de l'élève " + (i+1)));

      notes.push(note);

      if (notes[i] >= 10) {
        nbmoyenne++;
      }
    }

    console.log('il y a'+ nbmoyenne +' élèves qui ont plus que la moyenne');
}

ex12()

// Exercice 13


function ex13(array) {

    let array = [[0, 18], [1, 45], [45, 48], [-3, 2]]

    let tab = array.flat();

    let max = Math.max(...tab);

    console.log(max)
} 

ex13()

// Exercice 14 


function ex14() {

    var nb = prompt("Entrez un mot");

    var result = 0; 

    for (var i = 0 ; i <nb.length ; i ++ ) {

        result++
    }

    console.log (result)
}

ex14()

// Exercice 15


function ex15() {

    const nombreRandom = Math.floor(Math.random() * 5)+1;

    let nombre = -1;

    while (nombre !== nombreRandom ) {

      nombre = parseInt(prompt("Devinez un chiffre entre 0 et 5"));
  
      if (nombre < nombreRandom) {
        
        console.log("plus grand.");

      } else if (nombre > nombreRandom) {

        console.log("plus petit");
      } 

    }

    console.log('Bravo!');

}

ex15()

// Exercice 16

function ex16(a,b) {

    if ( a > b ){
        console.log(0)
    } else {
        console.log(1)
    }
} 

ex16()

// Exercice 17 

function ex17 (array){
    for(var i = 0; i < array.length; i++){

      var min = i; 

      for(var j = i+1; j < array.length; j++){
        if(array[j] < array[min]){
         min = j; 
        }
      }
      var indexMin = array[i];
      array[i] = array[min];
      array[min] = indexMin;
    }
    console.log(array);
}

ex17()


// Exercice 18

function ex18(array) {

    let max = Math.max(...array);

    console.log(max)
} 

ex18()

// Exercice 19

function ex14(string) {

    let voyelles = 0;

    for (let i = 0; i < string.length; i++) {
        
        if (
          string[i] === "a" ||
          string[i] === "e" ||
          string[i] === "i" ||
          string[i] === "o" ||
          string[i] === "u" ||
          string[i] === "y" ||
          string[i] === "A" ||
          string[i] === "E" ||
          string[i] === "I" ||
          string[i] === "O" ||
          string[i] === "U" ||
          string[i] === "Y"
        ) {
          voyelles++;
        }

      }

    console.log(voyelles);
}

ex19()

// Exercice 20


function ex20(array) {

let newArray = [];

for (var i = 0 ; i < array.length ; i++) {

    if ( array[i] % 2 === 0) {

        newArray.push(array[i])
    }
}

console.log(newArray);
}

ex20()

// Exercice 21 

function ex21 (string) {

    let str = string;
    let tab = str.split("");
    let reverse = tab.reverse();
    let join = reverse.join('');

   console.log(join);
}

ex21()

//FIN 