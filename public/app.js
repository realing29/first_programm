document.addEventListener('click', (event) => {
	if (event.target.dataset.type === 'remove') {
		const id = event.target.dataset.id
		remove(id).then(() => {
			event.target.closest('li').remove()
		})
	}

	if (event.target.dataset.type === 'editStart') {
		const li = event.target.closest('li')
		li.classList.add('edit')
	}

	if (event.target.dataset.type === 'cancelEdit') {
		const li = event.target.closest('li')
		const title = li.querySelector('.titleText')
		const input = li.querySelector('.inputTitleText')
		input.value = title.textContent.trim()
		li.classList.remove('edit')
	}

	if (event.target.dataset.type === 'commitEdit') {
		const li = event.target.closest('li')
		const id = li.dataset.id
		const title = li.querySelector('.titleText')
		const newTitleInput = li.querySelector('.inputTitleText')
		edit({ id, title: newTitleInput.value })
		title.textContent = newTitleInput.value
		li.classList.remove('edit')
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
