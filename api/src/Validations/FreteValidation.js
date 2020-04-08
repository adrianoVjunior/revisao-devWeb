const { body } = require('express-validator')

const FreteValidationRules = () => {
    return [
        body('comprimento'),
        body('altura'),
        body('largura')
    ]
}
module.exports = { FreteValidationRules }