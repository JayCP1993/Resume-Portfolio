/*
  File name: script.js
  Author: Jay Pathak
  Course: CST8285_322
  Due Date: 7 July 2024
  Professor: Alem Legesse
  Purpose: This file contains JavaScript functionality for the personal portfolio website, including project navigation and form validation.
*/

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Log a message when the website is loaded
    console.log('Website loaded and ready!');

    // Get all project elements
    const projects = document.querySelectorAll('.project');
    // Get the previous and next buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    // Initialize the current project index
    let currentProject = 0;

    // Function to display a project by index
    function showProject(index) {
        projects.forEach((project, i) => {
            project.style.display = i === index ? 'block' : 'none';
        });
    }

    // Event listener for the previous button
    prevBtn.addEventListener('click', function() {
        currentProject = (currentProject === 0) ? projects.length - 1 : currentProject - 1;
        showProject(currentProject);
    });

    // Event listener for the next button
    nextBtn.addEventListener('click', function() {
        currentProject = (currentProject === projects.length - 1) ? 0 : currentProject + 1;
        showProject(currentProject);
    });

    // Initial display of the first project
    showProject(currentProject);

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Please fill out all required fields correctly.');
        }
    });
});
