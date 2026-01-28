exports.paginaInicial =(req, res) => {
    res.send(`
        <form action = "/" method="POST">
        nome do cliente : <input type="text" name="qualquer coisa"
        outro campo:<input type="text" name ="aquuioutrocampo"
        <button>ola mundo</button>
        </form>`)
};
exports.trataPost = (req, res)=>{
    res.send('ei sou sua nova rota de post')
}