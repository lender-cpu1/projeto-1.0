 function calcular(){
            //JS é uma linguagem não tipada (sem tipo de dado)

            let qtdeArroz = Number (document.getElementById("qtdeArroz").value) //Number() é uma função que converte texto em número
            let qtdeFeijao = Number (document.getElementById("qtdeFeijao").value) //recupera o valor informado no elemento com id
            let qtdeOleo = Number (document.getElementById("qtdeOleo").value)
            let qtdeMacarrao = Number (document.getElementById("qtdeMacarrao").value)
            //calcula o valor total de pontos
            let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)
            let cor = document.getElementById("cor").value
            let metaKit //declara a variável
            if (cor =="amarela"){
                metaKit = 54
                metaSuplemento = 27
            }
            else if (cor =="cinza"){
                metaKit = 51
                metaSuplemento = 26
            }
            else if (cor =="laranja"){
                metaKit = 21
                metaSuplemento = 11
            }
            else if (cor =="marrom"){
                metaKit = 88
            }
            else if (cor =="preta"){
                metaKit = 60
            }
            let metaSuplemento
            let metaLeite = metaKit
            if (metaKit%2==0){
                metaSuplemento = metaKit/ 2
            }
            else {
                metaSuplemento = (metaKit/2) + 0.5
            }
            let metaSangue = metaSuplemento
            let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
            if (kitAlimentacao >=metaKit) { 
                pontos = pontos + 5000
               if (kitAlimentacao>metaKit){
                pontos = pontos + (kitAlimentacao - metaKit) * (5000/metaKit)
               }
            }
            else {
                pontos = pontos + kitAlimentacao * 5000/metaKit
            }
            let qtdeLatas = Number(document.getElementById("qtdeLatas").value)
            if (qtdeLatas>= metaSuplemento){
                pontos = pontos + 5000
                if (qtdeLatas> metaSuplemento){
                    pontos = pontos + (qtdeLatas-metaSuplemento)*(5000/metaSuplemento)
                }
            }
            else {
                pontos = pontos + (qtdeLatas* (5000/metaSuplemento))
            }
            //calcula a pontuação do leite
            let qtdeLeite = Number(document.getElementById("qtdeLeite").value)
            //calcula a pontuação do sangue
             let qtdeDoacao = Number(document.getElementById("qtdeDoacao").value)
            //vamos exibir o resultado para o usuário
            document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos"
        }