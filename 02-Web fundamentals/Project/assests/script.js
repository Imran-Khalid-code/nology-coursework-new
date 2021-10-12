import { projects } from './data.js'
const projectsContainer = document.querySelector('.projects-inner')
const main = document.querySelector('main')
const overlay = document.querySelector('.overlay')

projects.map((project) => {
	//creating each project HTML to be rendered

	//Project Container
	const projectNode = document.createElement('div')
	projectNode.classList.add('project-item')

	//Project Img
	const projectImg = document.createElement('img')
	projectImg.classList.add('project-img')
	projectImg.src = project.imgsrc

	//Project Header
	const projectHeader = document.createElement('h4')
	projectHeader.innerText = project.name

	//Append to Project container
	projectNode.appendChild(projectImg)
	projectNode.appendChild(projectHeader)
	console.log(projectNode)

	//Append each project to projects container

	projectsContainer.appendChild(projectNode)

	//Creating a Modal for each project

	//Modal Container
	const modal = document.createElement('div')
	modal.classList.add('modal')

	//Modal Header
	const modalHeader = document.createElement('h4')
	modalHeader.innerText = project.name

	//Modal Img
	const modalImg = document.createElement('img')
	modalImg.classList.add('modal-img')
	//?
	modalImg.src = project.imgsrc

	//Modal Description
	const modalDescription = document.createElement('div')
	modalDescription.classList.add('modal-description')
	modalDescription.innerText = project.description

	//Modal button

	const modalButton = document.createElement('button')
	modalButton.classList.add('modal-btn')
	modalButton.innerHTML = 'Close'

	//Close Modal on click

	modalButton.addEventListener('click', () => {
		modal.classList.remove('active')
		overlay.classList.remove('active')
	})

	//Append all elements to modal container

	modal.appendChild(modalHeader)
	modal.appendChild(modalImg)
	modal.appendChild(modalDescription)
	modal.appendChild(modalButton)
	// append modal to the main
	main.appendChild(modal)

	projectImg.addEventListener('click', () => {
		modal.classList.toggle('active')
		overlay.classList.toggle('active')
	})
})

/////
const projectButton = document.querySelectorAll('details')
// projectButton.classList.add('details')
// projectButton.innerHTML = 'More'

projectButton.addEventListener('click', () => {
	// projectButton.classList.remove('active')
	// overlay.classList.remove('active')
})
