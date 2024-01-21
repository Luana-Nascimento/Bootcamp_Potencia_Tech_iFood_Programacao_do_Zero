
let saldoVitorias = pontos(94, 20)
let nivel = ""

switch(true) {
    case saldoVitorias <= 10:
    nivel = "Ferro"
    break
     
    case saldoVitorias <= 20:
    nivel = "Bronze"
    break
    
    case saldoVitorias <= 50:
    nivel = "Prata"
    break
 
    case saldoVitorias <= 80:
    nivel = "Ouro"
    break
    
    case saldoVitorias <= 90:
    nivel = "Diamante"
    break
 
    case saldoVitorias <= 100:
    nivel = "Lendário"
    break
 
    default:
    nivel = "Imortal"
 }

console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivel)  

function pontos(vitorias, derrotas) {
    let resultado = vitorias - derrotas 
    return resultado 
}



