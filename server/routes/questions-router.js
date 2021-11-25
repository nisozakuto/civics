const express = require('express')
const questionsRouter = express.Router()
const questions = require('../db/questions')

questionsRouter.get('/', (req, res) => {

    res.json({ message: 'ok', test: 'test', data: questions })
})
module.exports = questionsRouter