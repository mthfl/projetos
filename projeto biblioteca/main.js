
let bonusResgatado = false;

function resgatar() {

    bonusResgatado = true;


    alert("Você ganhou 25% de desconto!");

   
    const comprarLink = document.getElementById('comprar');
    comprarLink.href = "../projeto ferias/planos.html";
}


function comprar(event) {
   
    if (bonusResgatado !== true) {
    
        alert("Por favor, resgate seu desconto primeiro.");
    } else {
      
        
    }
}
