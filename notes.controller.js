const fs = require('fs/promises')

const addNote = async (title) => {
	const notes = require('./db.json')

	const note = {
		title,
		id: Date.now().toString(),
	}
	notes.push(note)

	await fs.writeFile('./db.json', JSON.stringify(notes))
}

const getNotes = () => require('./db.json')

module.exports = {
	addNote,
	getNotes,
}
