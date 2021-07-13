(async () => {
    const database = require('./db')
    const Produto = require('./Produto')

    const produto = await Produto.findByPk(1);
    console.log(produto)
    produto.nome = 'Linha B'
    await produto.save()
})()

