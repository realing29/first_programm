const fs = require('fs/promises')
const fsSync = require('fs')
const path = require('path')

const base = path.join(__dirname, 'temp')

function getContent() {
	return `\n ${process.argv[2] ?? ''}`
}

async function start() {
	try {
		// await fs.access(base)
		if (!fsSync.existsSync(base)) {
			await fs.mkdir(base)
			console.log('folder created')
		}
		await fs.appendFile(path.join(base, 'logs.txt'), getContent())
		const data = await fs.readFile(path.join(base, 'logs.txt'), { encoding: 'utf-8' })
		console.log(data)
	} catch (err) {
		console.log('err', err)
	}
}
start()
