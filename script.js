// Exercice 1

let userLanguage = prompt("Quel langue parlez vous??");

userLanguage = userLanguage.toLowerCase();

if(userLanguage === "français") {
    alert("Bonjour");
}
else if(userLanguage === "anglais") {
    alert("Hello");
}
else if(userLanguage === "hébreu") {
    alert("Shalom");
}
else {
    alert("01110011 01101111 01110010 01110010 01111001");
}

// Exercice 2

let userNote = prompt("Saisissez votre note: ");

if(userNote > 90) {
    console.log("A");
}
else if (userNote > 80) {
    console.log("B");
}
else if (userNote >= 70) {
    console.log("C");
}
else {
    console.log("D");
}

// Exercice 3

let verb = prompt("entrer un verbe : ");

if (verb.length >= 3 && verb.substr(-3) != "ing") {
    verb+="ing";
}
else if(verb.length >= 3 && verb.substr(-3) === "ing") {
    verb+="ly";
}
else {
    console.log(verb);
}

console.log(verb);