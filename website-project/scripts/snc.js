const mainnav = document.querySelector('.list');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


// update footer info

function updatefooter(){

    const currentYear = new Date().getFullYear();
    document.querySelector('#currentyear').innerHTML = currentYear;

    const lastModified = document.lastModified;
    document.querySelector('#modified-date').innerHTML = lastModified;
};

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent page refresh
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Check if both fields are filled
    if (name && email) {
        const subscribers = JSON.parse(localStorage.getItem('subscribers')) || []; // Get existing subscribers from localStorage
        const newSubscriber = { name, email };
        
        subscribers.push(newSubscriber); // Add new subscriber to the array
        localStorage.setItem('subscribers', JSON.stringify(subscribers)); // Save updated subscribers array
        
        alert(`Thank you for subscribing, ${name}!`);
        
        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    } else {
        alert('Please fill in all fields!');
    }
}


// function showCalender() {
//     const calenderURL = "https://calendar.google.com/calendar/embed?src=395c6a929d03c578432d00d06d9120c8fe2b811cf81d00ddb15db74c24ed81bc%40group.calendar.google.com&ctz=America%2FSao_Paulo";

//     const calendarContainer = document.getElementById('calender-container');
    
//     // Clear the container before appending the new iframe
//     calendarContainer.innerHTML = '';

//     // Create the iframe element
//     const calendarFrame = document.createElement('iframe');
    
//     // Set iframe attributes
//     calendarFrame.src = calenderURL;
//     calendarFrame.style.border = '0';
//     calendarFrame.width = '800';
//     calendarFrame.height = '600';
//     calendarFrame.frameBorder = '0';
//     calendarFrame.scrolling = 'no';

//     // Append the iframe to the container
//     calendarContainer.appendChild(calendarFrame);
// }

// // Select the button and add the event listener
// const calenderButton = document.querySelector('.calender'); 

// calenderButton.addEventListener('click', () => {
//     showCalender();
// });

updatefooter()