/* 
Exercice 1

la valeur de C à la fin de cet algorithme est 24.

Exercice 2

la valeur de C à la fin de cet algorithme est "12312" 

*/

// Exercice 3 

function ex3 () {
    
    const prixHT = parseFloat(prompt ('donne moi le prix hors taxe '));

    const prixTTC = prixHT * 1.196;
    
   console.log('Le prix TTC est de' + prixTTC +'euros')

}


// Exercice 4 

function ex4 () {

    const prenom = prompt("Entrez votre prénom :");

    const nom = prompt("Entrez votre nom :");
    
    console.log('Bonjour'+prenom + 'votre nom est' +nom);
}

// Exercice 5 

function ex5 () {

    const nombreA = parseFloat(prompt("Entrez le premier nombre :"));

    const nombreB = parseFloat(prompt("Entrez le deuxième nombre :"));

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


// Exercice 7 

function ex7() {

let nombre = -1; 

let nombreRandom = Math.floor(Math.random() * 11);

while (nombre !== nombreAleatoire) {
  nombre = parseInt(prompt("Devinez un nombre entre 0 et 10 :"));
}
console.log("Bravo vous avez deviné le nombre " + nombreRandom);
}

// Exercice 8 

function ex8() {




    
}







