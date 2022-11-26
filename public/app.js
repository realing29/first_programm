document.addEventListener('click', (event) => {
	if (event.target.dataset.type === 'remove') {
		const id = event.target.dataset.id
		remove(id).then(() => {
			event.target.closest('li').remove()
		})
	}
	if (event.target.dataset.type === 'edit') {
		const id = event.target.dataset.id
		const title = event.target.closest('li').childNodes[0]

		const newTitle = prompt('ведите новое значение', title.textContent.trim())
		if (newTitle === null || newTitle === '') return
		edit({ id, title: newTitle }).then(() => {
			event.target.closest('li')
		})
		title.textContent = newTitle
	}
})

async function remove(id) {
	await fetch(`/${id}`, {
		method: 'DELETE',
	})
}

async function edit({ id, title }) {
	await fetch(`/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({ title }),
	})
}
