const { Router } = require('express')
const FreteController = require('./src/Controllers/FreteController')
const {validate,validateFrete} = require('./src/Middleware/Validator')
const {FreteValidationRules} = require('./src/Validations/FreteValidation')

const routes = Router()
routes.post('/frete', validateFrete, FreteController.post)

module.exports = routes