var list = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// QUESTO NON FUNZIONERA' CON PIU' ELEMENTI , HO PROVATO A
// TROVARE UNA SOLUZIONE ALL'ALGORITMO SENZA GUARDARE NESSUNA FORMULA NE NIENTE
// E HO INTENZIONE DI CONTINUARE A PROVARCI PER UNA QUESTIONE MIA PERSONALE MA 
// RITENETELO PURE UN BONUS NON COMPLETATO IN QUESTO MOMENTO
// MAGARI DOMANI DA PIU LUCIDO RIPROVO

function isMin(data, list) {
    let bool = list.includes(data);
    if (bool) {
        let counter = 1;
        for (let index = 0; index < list.length; index++) {
            if (counter == list.length) {
                return true;
            } else if (counter < list.length && index == list.length - 1) {
                return false;
            }
            if (data < list[index]) {
                ++counter;
            } else if (data == list[index]) {
                ++counter;
            } else {
                return false;
            }
        }
    } else {
        return 'string is not contained.';
    }
}

function mySort(list) {
    var total = list.length;
    var sorted = [];
    for (let j = 0; j < total; j++) {
        for (let index = 0; index < list.length; index++) {
            let check = isMin(list[index], list);
            if(check) {
                sorted.push(list[index]);
                list.splice(index, 1);
            }
        }
    }

    return sorted;
}

console.log(mySort(list));