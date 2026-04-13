function churras(){
    let convidados = Number (document.getElementById("convidados").value)
    let total = convidados * 400
    let totalkg = total /1000
    document.getElementById("resultadoCarne").innertext =
          "Total em kg" + totalkg.toFixed(2)
}