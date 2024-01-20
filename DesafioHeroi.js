let nomeHeroi = "Capitão América"
let experiencia = 1999
let mensagemNome = "O Herói de nome "
let mensagemNivel = " está no nível de "

switch(true) {
   case experiencia <= 1000:
   console.log(mensagemNome + nomeHeroi + mensagemNivel + "Ferro")
   break
    
   case experiencia <= 2000:
   console.log(mensagemNome + nomeHeroi + mensagemNivel + "Bronze")
   break
   
   case experiencia <= 5000:
   console.log(mensagemNome + nomeHeroi + mensagemNivel + "Prata")
   break

   case experiencia <= 7000:
   console.log(mensagemNome + nomeHeroi + mensagemNivel + "Ouro")
   break
   
   case experiencia <= 8000:
   console.log(mensagemNome + nomeHeroi + mensagemNivel + "Platina")
   break

   case experiencia <= 9000:
   console.log(mensagemNome + nomeHeroi + mensagemNivel + "Ascendente")
   break

   case experiencia <= 10000:
   console.log(mensagemNome + nomeHeroi + mensagemNivel + "Imortal")
   break

   default:
   console.log(mensagemNome + nomeHeroi + mensagemNivel + "Radiante")
}