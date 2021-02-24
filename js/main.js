var lastNames = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var symbols = /^[!@#\$%\'^\&*\)\(+=._-]+$/g;

function capFirstLowerAll(string) {

    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);

};

var yourLastName = prompt('Inserisci il tuo cognome :');

if (!(symbols.test(yourLastName)) && isNaN(parseInt(yourLastName)) && !Number.isInteger(parseInt(yourLastName)) && yourLastName && !(yourLastName == ' ')) {

    yourLastName = capFirstLowerAll(yourLastName);
    lastNames.push(yourLastName);
    lastNames.sort();
    
    var list = document.getElementById('ol');
    
    for (let index = 0; index < lastNames.length; index++) {
        list.innerHTML += '<li>' + lastNames[index] + '</li>';
    }

} else {
    alert('Inserisci un cognome valido, riprova');
    location.reload();
}
