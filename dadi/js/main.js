
const randomUser = Math.floor((Math.random()*6)+1);

const randomPC = Math.floor((Math.random()*6)+1);

if (randomUser == randomPC){
    alert(`Numero utente: ${randomUser} \n Numero PC: ${randomPC} \n Nessun vincitore, parità`);
}else if (randomUser > randomPC){
    alert(`Numero utente: ${randomUser} \n Numero PC: ${randomPC} \n Il vincitore è l'utente`);
}else{
    alert(`Numero utente: ${randomUser} \n Numero PC: ${randomPC} \n Il vincitore è il PC`);
}