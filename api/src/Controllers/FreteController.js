module.exports = {
    async post(request, response) {
        let { comprimento, largura, altura } = request.body
        var valorFrete = ((comprimento * largura * altura) / 6000)
        return response.json({ "valorFrete": valorFrete })
    }
}