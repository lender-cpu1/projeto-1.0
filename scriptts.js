function churras(){
    let convidados = Number (document.getElementById("convidados").value)
    let total = convidados * 400
    let totalkg = total /1000
    document.getElementById("resultadoCarne").innertext =
          "Total em kg" + totalkg.toFixed(2)
}
function febre(){
    let temperatura = Number(document.getElementById("temperatura").value)
    if (temperatura >= 37.5){
        document.getElementById("resultadoFebre").innerText = "Está com febre"
    }
    else {
        document.getElementById("resultadoFebre").innerText = "Temperatura normal"
    }
}
