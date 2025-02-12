let naam = prompt("Wat is je naam?");
let score = 0;

let vraag1 = prompt("Welke programmeertaal wordt vaak gebruikt voor webdevelopment? (a) Python (b) JavaScript (c) C++");
if (vraag1.toLowerCase() === "b" || vraag1.toLowerCase() === "javascript") {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout! Het juiste antwoord is: JavaScript.");
}

let vraag2 = prompt("Wat is de output van 'console.log(typeof [])' in JavaScript? (a) object (b) array (c) undefined");
if (vraag2.toLowerCase() === "a" || vraag2.toLowerCase() === "object") {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout! Het juiste antwoord is: object.");
}

let vraag3 = prompt("Welke HTML-tag wordt gebruikt om JavaScript in te voegen? (a) <js> (b) <script> (c) <javascript>");
if (vraag3.toLowerCase() === "b" || vraag3.toLowerCase() === "script") {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout! Het juiste antwoord is: <script>.");
}

alert(naam + ", je hebt " + score + " van de 3 vragen correct!");
