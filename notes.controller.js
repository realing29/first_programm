const fs = require('fs/promises')
const path = require('path')

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
}

const getNotes = async () => {
	let notes = await fs.readFile(notesPath, { encoding: 'utf-8' })
	notes = JSON.parse(notes)
	return Array.isArray(notes) ? notes : []
}

module.exports = {
	addNote,
	getNotes,
}
