
const emailRegistrata = ["topolino@disney.it", "paperino@disney.it", "pippo@disney.it", "pluto@disney.it"];

const email = prompt("Inserisci la tua email");

//l'utilizzo della variabile check è necessario per evitare di lanciare un alert per ogni iterazione in cui email != emailRegistrata
let check = 0;

for(let i=0; i<emailRegistrata.length; i++){

    if(email == emailRegistrata[i]){
        alert("L'email inserita è autorizzata");
    }else{
        check += 1;
    }
    
    if(check == emailRegistrata.length){
        alert("L'email NON è registrata!");
    }
    
}