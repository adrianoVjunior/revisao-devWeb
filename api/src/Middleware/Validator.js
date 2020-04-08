const { body, validationResult } = require('express-validator')

const validate = (request, reponse, next) => {
    const errors = validationResult(request)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return response.status(422).json({
        errors: extractedErrors
    })
}

const validateFrete = (request, response, next) => {
    let { largura, altura, comprimento } = request.body
    let soma = largura + altura + comprimento
    if (soma > 200)
        return response.status(422).json({
            "erro": "A soma das dimensões da caixa é maior que 200cm"
        })
    return next()
}

module.exports = {
    validate, validateFrete
}