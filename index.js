const chalk = require('chalk')
const express = require('express')
const path = require('path')
const { addNote } = require('./notes.controller')

const basePath = path.join(__dirname, 'pages')

const PORT = 3000
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.sendFile(path.join(basePath, 'index.html'))
})

app.post('/', async (req, res) => {
	await addNote(req.body.title)
	res.sendFile(path.join(basePath, 'index.html'))
})

app.listen(PORT, () => {
	console.log(chalk.green(`Server been started on port ${PORT}...`))
})
