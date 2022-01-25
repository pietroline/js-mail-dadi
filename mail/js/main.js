
const emailRegistrata = ["topolino@disney.it", "paperino@disney.it", "pippo@disney.it", "pluto@disney.it"];
const passwordEmailRegistrata = ["topolinoDisney21", "paperinoDisney23", "pippoDisney27", "plutoDisney36"];

let accedi = document.getElementById("accedi");

accedi.addEventListener("click",

    function(){

        // prelevo email inserita dall'utente e metto tutti i caratteri di stringa minuscoli, in maniera tale che non ci siano problemi nel confronto con le email registrate
        let email = document.getElementById("email").value;
        email = email.toLowerCase();

        // prelevo password inserita dall'utente
        let password = document.getElementById("password").value;
        
        //l'utilizzo della variabile check è necessario per evitare di lanciare un alert per ogni iterazione in cui email != emailRegistrata
        let check = 0;

        for(let i=0; i<emailRegistrata.length; i++){

            if(email == emailRegistrata[i]){
                if(password == passwordEmailRegistrata[i]){
                    alert("L'email e password inserite sono corrette, sei autorizzato!");
                }else{
                    alert("Password sbagliata!");
                }
            }else{
                check += 1;
            }
            
            if(check == emailRegistrata.length){
                alert("L'email NON è registrata!");
            }
            
        }
    }

);

let annulla = document.getElementById("annulla");

annulla.addEventListener("click",

    function(){

        document.getElementById("annulla").value = "";
    }

);