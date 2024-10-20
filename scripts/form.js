document.addEventListener('DOMContentLoaded', () =>{

    // Get the current year
const currentYear = new Date().getFullYear();
document.querySelector('#currentyear').innerHTML = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Select the element with id 'modified-date' and set its innerHTML
document.querySelector('#modified-date').innerHTML = lastModified;


// add the procuts array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productSelect = document.getElementById('product-options')

//   loop through the array and create a new option element
products.forEach(product => {
    const option = document.createElement('option');

    // set the value and text of the option
    option.value = product.id;
    option.text = product.name;

    // append the option to the select element
    productSelect.appendChild(option);
});


const counter = document.getElementById("counterNo")

if (!localStorage.getItem('reviewsSent')){
    localStorage.setItem('reviewsSent', 0);
}

if (!localStorage.getItem('reviews')){
    localStorage.setItem('reviews', JSON.stringify([]));
}

function sendReview(review) {
    // Increment the reviewsSent counter
    const reviewsSent = parseInt(localStorage.getItem('reviewsSent')) + 1;
    localStorage.setItem('reviewsSent', reviewsSent);

    // Get the current reviews array from local storage
    const reviews = JSON.parse(localStorage.getItem('reviews'));
    
    // Add the new review to the array
    reviews.push(review);
    
    // Save the updated reviews array back to local storage
    localStorage.setItem('reviews', JSON.stringify(reviews));
};

// Update the counter display
counter.textContent = localStorage.getItem('reviewsSent');

})

