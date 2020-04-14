module.exports = {
    async post(request, response) {
        let { comprimento, largura, altura, valorMercadoria } = request.body
        var valorFrete = ((comprimento * largura * altura) / 6000)
        var taxaRisco = ((valorMercadoria / 100) * 0.3)
        return response.json({
            "Valores": {
                "PAC": valorFrete,
                "Sedex": valorFrete * 10,
                "Sedex10": valorFrete * 20,
                "Sedex12": valorFrete * 30
            },
            "TaxaRisco": valorFrete + taxaRisco
        })
    }
}