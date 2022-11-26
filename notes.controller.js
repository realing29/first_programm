const fs = require('fs/promises')
const path = require('path')
const chalk = require('chalk')

const notesPath = path.join(__dirname, 'db.json')

const addNote = async (title) => {
	const notes = await getNotes()

	const note = {
		title,
		id: Date.now().toString(),
	}
	console.log('🚀 ~ file: notes.controller.js ~ line 10 ~ addNote ~ note', note)
	notes.push(note)
	await fs.writeFile(notesPath, JSON.stringify(notes))
	// console.log(chalk.green.inverse('Note was added!'))
	console.log(chalk.bgGreen('Note was added!'))
}

const getNotes = async () => {
	let notes = await fs.readFile(notesPath, { encoding: 'utf-8' })
	notes = JSON.parse(notes)
	return Array.isArray(notes) ? notes : []
}

const printNotes = async () => {
	const notes = await getNotes()

	console.log(chalk.bgBlue('Here is the list of notes:'))
	notes.forEach((note) => {
		console.log(chalk.bgBlue(note.id), chalk.blue(note.title))
	})
}

const deleteNote = async (id) => {
	let isFinded = false

	let notes = await fs.readFile(notesPath, { encoding: 'utf-8' })
	notes = JSON.parse(notes)

	notes = notes.filter((note) => {
		console.log(note.id !== id)
		if (note.id !== id) return true
		else {
			isFinded = true
			return false
		}
	})
	if (isFinded) {
		await fs.writeFile(notesPath, JSON.stringify(notes))
		console.log(chalk.green('Note was deleted!'))
	} else {
		console.log(chalk.red('Id is not finded'))
	}
}

const editNote = async ({ id, title }) => {
	let isFinded = false

	let notes = await fs.readFile(notesPath, { encoding: 'utf-8' })
	notes = JSON.parse(notes)

	notes = notes.map((note) => {
		if (note.id !== id) return note
		else {
			isFinded = true

			return { ...note, title }
		}
	})
	if (isFinded) {
		await fs.writeFile(notesPath, JSON.stringify(notes))
		console.log(chalk.bgGreen('Note was edited!'))
	} else {
		console.log(chalk.red('Id is not finded'))
	}
}

module.exports = {
	addNote,
	printNotes,
	deleteNote,
	editNote,
}
