import { projects } from './data.js'
const projectsContainer = document.querySelector('.projects-inner')
const projectContainer = document.querySelector('.project-item')
let modal = document.querySelector('.modal')
const modalbtn = document.querySelector('.modal-btn')
// console.log(projectContainer)

projects.forEach((project) => {
	const projectNode = document.createElement('div')
	projectNode.classList.add('project-item')
	let projectImage = document.createElement('img')
	projectImage.src = project.imgsrc
	projectNode.appendChild(projectImage)
	const projectHeader = document.createElement('h4')
	projectHeader.innerHTML = project.name
	projectNode.appendChild(projectHeader)
	projectsContainer.appendChild(projectNode)

	let modalHeader = document.createElement('h4')
	modalHeader.innerText = project.name
	modal.appendChild(modalHeader)

	projectImage.addEventListener('click', () => {
		modalbtn.addEventListener('click', () => {
			modal.classList.remove('active')
		})
		modal.classList.toggle('active')
	})
})

// createModal()
