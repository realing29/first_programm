const chalk = require('chalk')
const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
	console.log('Server!')
	res.end('Hello from server!')
})

server.listen(PORT, () => {
	console.log(chalk.green(`Server been started on port ${PORT}...`))
})
