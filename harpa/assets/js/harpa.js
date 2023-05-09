const arrImages = [
	{
		url: '',
		title: 'Harpa - Reykjavik',
		author: 'Heinz K'
	}
]

const loadGallery = () => {
	for(let item of arrImages) {
		const div = document.createElement('div');
		const img = document.createElement('img');
		div.classList.add('imagecontainer')
		img.src = item.url;
		img.setAttribute('alt', `${item.title} - Foto: ${item.author}`)
		div.append(img)

	}
}