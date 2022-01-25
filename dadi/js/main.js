
const randomUser = Math.floor((Math.random()*6)+1);

const randomPC = Math.floor((Math.random()*6)+1);

if (randomUser == randomPC){
    // console.log(`Numero utente: ${randomUser} \n Numero PC: ${randomPC} \n Nessun vincitore, parità`);
    document.getElementById("vincitore").innerHTML = "Parità";
}else if (randomUser > randomPC){
    // console.log(`Numero utente: ${randomUser} \n Numero PC: ${randomPC} \n Il vincitore è l'utente`);
    document.getElementById("vincitore").innerHTML = "Il vincitore è Utente"
}else{
    // console.log(`Numero utente: ${randomUser} \n Numero PC: ${randomPC} \n Il vincitore è il PC`);
    document.getElementById("vincitore").innerHTML = "Il vincitore è PC"
}

// append del dado utente, per inserire classe d-block
document.getElementById("dadoUser_faccia-" + randomUser).classList.add("d-block");

// append del dado PC, per inserire classe d-block
document.getElementById("dadoPC_faccia-" + randomPC).classList.add("d-block");



