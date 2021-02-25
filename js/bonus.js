// FUNZIONA! MA SOLO CON LE STRINGHE (CHE COMUNQUE ERA LA CONSEGNA)

var list = ['Bianchi', 'Rossi', 'Duzioni', 'Zzarro', 'Aire', 'Balsano', 'Verdi' , 'Anna' , 'Gigi', 'Zattoni' , 'zola'];

function isMin(data,list){
    if(list.length == 2) {
        if (data == list[0]) {
            return data < list[1];
        } else {
            return data < list[0];
        }
    }
    let counter = 0;
    let copy = 0;
    for(let i = 0; i < list.length; i++) {
        if(counter == list.length - 1) {
            return true;
        }
        if (data < list[i]){
            counter++;
        } else if (data == list[i]) {
            copy++;
        }
    }
    if(counter + copy == list.length) {
        return true;
    } else {
        return false;
    }
}

function mySort(list) {
    let sorted = [];
    let total = list.length;
    for (let i = 0; i < total; i++) {
        for(let j = 0; j < list.length; j++){ 
            if(isMin(list[j], list)){
            sorted.push(list[j]);
            list.splice(j,1);
        }

   }

    }
 return sorted;
}

console.log(mySort(list));