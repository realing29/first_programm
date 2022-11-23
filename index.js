const yargs = require('yargs')
const { getNotes, addNote } = require('./notes.controller')

yargs.command({
	command: 'add',
	describe: 'Add new note to list',
	builder: {
		title: {
			type: 'string',
			describe: 'Note title',
			demandOption: true,
		},
	},
	handler({ title }) {
		addNote(title)
	},
})

yargs.command({
	command: 'list',
	describe: 'Print all notes',
	handler() {
		const notes = getNotes()
		console.log(notes)
	},
})

yargs.parse()
