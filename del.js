(async () => {
    const database = require('./db')
    const Produto = require('./Produto')

    const produto = await Produto.findByPk(1);
    await produto.destroy()

    // await produto.destroy({where:{ nome : mouse}})
})()
