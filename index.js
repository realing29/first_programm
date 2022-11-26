const chalk = require('chalk')
const express = require('express')
const { addNote, getNotes, deleteNote, editNote } = require('./notes.controller')
const path = require('path')

const PORT = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'pages')

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (req, res) => {
	res.render('index', {
		title: 'Express app',
		notes: await getNotes(),
		created: false,
	})
})

app.post('/', async (req, res) => {
	await addNote(req.body.title)
	res.render('index', {
		title: 'Express app',
		notes: await getNotes(),
		created: true,
	})
})

app.delete('/:id', async (req, res) => {
	await deleteNote(req.params.id)
	res.render('index', {
		title: 'Express app',
		notes: await getNotes(),
		created: false,
	})
})

app.put('/:id', async (req, res) => {
	const title = req.body.title
	const id = req.params.id
	await editNote({ id, title })
	res.end(JSON.stringify({ id, title }))
})

app.listen(PORT, () => {
	console.log(chalk.green(`Server been started on port ${PORT}...`))
})
