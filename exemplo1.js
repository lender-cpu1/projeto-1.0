function Verificarmedalha(){
    let posicao = Number(document.getElementById("posicao").value);
   let div = document.getElementById("resultadomedalha");
    switch(posicao){
        case 1: dispatchEvent.innerText = "medalha de ouro"
                div.style.color = "gold";
                break;
        case 2: dispatchEvent.innerText = "medalha de prata"
                div.style.color = "silver";
                break;
        case 3: dispatchEvent.innerText = "medalha de bronze"
                div.style.color = "brown";
                break;
        default: dispatchEvent.innerText= "posição sem medalha definida";
    }
    document.getElementById("resultadomedalha").innerText = mensagem;
} 