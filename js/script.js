//Ask name at user
let name = prompt('Inserisci il tuo nome utente');
//Ask Last name at user
let lastName = prompt('Inserisci il tuo cognome');
//Ask what is it preferite color of user
let color = prompt('Inserisci il tuo colore preferito');

//Write password generate on html file
//generate messagge for html
let password = `${name}${lastName}${color}23`;

document.getElementById('psw').innerHTML = password;