"use strict";

var _data = require("./data.js");

var projectsContainer = document.querySelector('.projects-inner');
var projectContainer = document.querySelector('.project-item');
console.log(projectContainer);

_data.projects.forEach(function (project) {
  var projectNode = document.createElement('div');
  projectNode.classList.add('project-item');
  var projectImage = document.createElement('img');
  projectImage.src = project.imgsrc;
  projectNode.appendChild(projectImage);
  var projectHeader = document.createElement('h4');
  projectHeader.innerHTML = project.name;
  projectNode.appendChild(projectHeader);
  projectsContainer.appendChild(projectNode); // console.log(projectHeader)
  // console.log(project.name)
});