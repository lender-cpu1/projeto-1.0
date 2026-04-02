 function calcular(){
            //JS é uma linguagem não tipada (sem tipo de dado)
            let qtdeArroz = Number (document.getElementById("qtdeArroz").value) //Number() é uma função que converte texto em número
            let qtdeFeijao = Number (document.getElementById("qtdeFeijao").value) //recupera o valor informado no elemento com id
            let qtdeOleo = Number (document.getElementById("qtdeOleo").value)
             let qtdeMacarrao = Number (document.getElementById("qtdeMacarrao").value)
            //calcula o valor total de pontos
            let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)
            let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
            if (kitAlimentacao >=60) { 
                pontos = pontos + 5000
               if (kitAlimentacao>60){
                pontos = pontos + (kitAlimentacao - 60) * 83.33
               }
            }
            else {
                pontos = pontos + kitAlimentacao * 83.33
            }
            //vamos exibir o resultado para o usuário
            document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
        }