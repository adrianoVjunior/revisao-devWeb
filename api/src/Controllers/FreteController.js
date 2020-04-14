module.exports = {
    async post(request, response) {
        let { comprimento, largura, altura, valorMercadoria } = request.body
        var valorFrete = ((comprimento * largura * altura) / 6000)
        var taxaRisco = ((valorMercadoria / 100) * 0.3)
        return response.json({
            "Frete": {
                "PAC": valorFrete,
                "Sedex": valorFrete * 10,
                "Sedex 10": valorFrete * 20,
                "Sedex 12": valorFrete * 30
            },
            "Taxa Risco": valorFrete + taxaRisco
        })
    }
}