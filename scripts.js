 function calcular(){
            //JS é uma linguagem não tipada (sem tipo de dado)

            let qtdeArroz = Number (document.getElementById("qtdeArroz").value) //Number() é uma função que converte texto em número
            let qtdeFeijao = Number (document.getElementById("qtdeFeijao").value) //recupera o valor informado no elemento com id
            let qtdeOleo = Number (document.getElementById("qtdeOleo").value)
            let qtdeMacarrao = Number (document.getElementById("qtdeMacarrao").value)
            //calcula o valor total de pontos
            let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)
            let cor = document.getElementById("cor").value
            let metaProva1 //declara a variável
            if (cor =="amarela")(
                metaProva1 = 54
            )
            else if (cor =="cinza")(
                metaProva1 = 51
            )
            else if (cor =="laranja")(
                metaProva1 = 21
            )
            else if (cor =="marrom")(
                metaProva1 = 88
            )
            else if (cor =="preta")(
                metaProva1 = 60
            )
            let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
            if (kitAlimentacao >=metaProva1) { 
                pontos = pontos + 5000
               if (kitAlimentacao>metaProva1){
                pontos = pontos + (kitAlimentacao - metaProva1) * (5000/metaProva1)
               }
            }
            else {
                pontos = pontos + kitAlimentacao * 5000/metaProva1
            }
            //vamos exibir o resultado para o usuário
            document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
        }