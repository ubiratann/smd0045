function soma(a,b){
  return a + b
}


var a = 1
var b = 2
console.log(`a = ${typeof a} \nb = ${typeof b}`)
console.log(`Caso com sucesso: ${soma(a,b)}\n`)

a = '1'
b = 2

console.log(`a = ${typeof a} \nb = ${typeof b}`)
console.log(`Caso com erro: ${soma(a,b)}`)
