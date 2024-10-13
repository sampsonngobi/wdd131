// Get the current year
const currentYear = new Date().getFullYear();
document.querySelector('#currentyear').innerHTML = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Select the element with id 'modified-date' and set its innerHTML
document.querySelector('#modified-date').innerHTML = lastModified;