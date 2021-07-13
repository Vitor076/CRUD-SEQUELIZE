(async () => {
    const database = require('./db')
    const produto = require('./Produto')

    const sel = await produto.findAll();
    console.log(sel)
})()