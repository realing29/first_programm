const yargs = require('yargs')
const { addNote, printNotes, deleteNote } = require('./notes.controller')

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
	async handler() {
		printNotes()
	},
})

yargs.command({
	command: 'remove',
	describe: 'delete note',
	builder: {
		id: {
			type: 'string',
		},
	},
	async handler({ id }) {
		deleteNote(id)
	},
})

yargs.parse()
