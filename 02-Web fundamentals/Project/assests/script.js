import { projects } from './data.js'
const projectsContainer = document.querySelector('.projects-inner')
const projectContainer = document.querySelector('.project-item')

console.log(projectContainer)

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

	// console.log(projectHeader)
	// console.log(project.name)
})
