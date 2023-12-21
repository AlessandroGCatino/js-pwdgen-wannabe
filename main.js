/*
let nomeUtente = prompt("Inserisci il tuo nome:", "nome");
let cognomeUtente = prompt("Inserisci il tuo cognome:", "cognome");
let coloreUtente = prompt("Inserisci il tuo colore preferito:", "colorePrefe");
document.writeln(`<h1> ${nomeUtente + cognomeUtente + coloreUtente} </h1>`);

console.log(nomeUtente, cognomeUtente, coloreUtente);
*/

function creaPassword(){
    let nomeUtente = document.getElementById("nome").value;
    let cognomeUtente = document.getElementById("cognome").value;
    let coloreUtente = document.getElementById("colore").value;
    document.getElementById("password").innerHTML=nomeUtente + cognomeUtente + coloreUtente;
    console.log(nomeUtente, cognomeUtente, coloreUtente);
}