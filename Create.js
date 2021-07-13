
(async () => {
const database = require('./db')
const produto = require('./Produto')

const nproduto = await produto.create({
        nome: 'mouse',
        preco : 15,
        descricao: 'Linha A '



})
console.log(nproduto)
})()