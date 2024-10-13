const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');

   
});


// Get the current year
const currentYear = new Date().getFullYear();
document.querySelector('#currentyear').innerHTML = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Select the element with id 'modified-date' and set its innerHTML
document.querySelector('#modified-date').innerHTML = lastModified;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Brasilia  Brazil",
        location: "Brasilia, Brazil",
        dedicated: "2023, September, 17",
        area: 116642,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/95f3f3abdd4811ed920ceeeeac1e15db91037802/full/320%2C/0/default"
      },

      {
        templeName: "Accra, Ghana",
        location: "Accra,Ghana",
        dedicated: "2004, January, 11",
        area: 116642,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/320%2C/0/default"
      },

      {
        templeName: "Belém, Brazil",
        location: "Belém, Para, Brazil",
        dedicated: "2022, November, 20",
        area: 116642,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/588d3a27e2b911ec94adeeeeac1e0a0694f432a0/full/320%2C/0/default"
      },

  ];
  // Function to create temple cards
  function createTempleCard(templeArray) {
    document.querySelector(".images").innerHTML = ""; // Clear the container first

    templeArray.forEach(temple => {
        const templeCard = document.createElement('section');
        const name = document.createElement('h3');
        const location = document.createElement('p');
        const dedication = document.createElement('p');
        const area = document.createElement('p');
        const image = document.createElement('img');
        

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area: </span>${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.loading = 'lazy';


        templeCard.appendChild(name);
        templeCard.appendChild(location);
        templeCard.appendChild(dedication);
        templeCard.appendChild(area);
        templeCard.appendChild(image);

        document.querySelector(".images").appendChild(templeCard);
    });
}

// Event listeners for buttons
document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById('home');
    const oldTemplesButton = document.getElementById('old');
    const newTemplesButton = document.getElementById('new');
    const largeTemplesButton = document.getElementById('large');
    const smallTemplesButton = document.getElementById('small');
    const title = document.getElementById('title');


    // Home button displays all temples
    homeButton.addEventListener("click", (e) => {
        e.preventDefault();
        createTempleCard(temples); // Show all temples
        title.innerHTML ='Home'
    });

    // Filter old temples (before 1900)
oldTemplesButton.addEventListener("click", (e) => {
  e.preventDefault();
  const oldTemplesArray = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(',')[0].trim()); // Extract the year from the first part
      title.innerHTML ='Old'
      return year < 1900;
  });
  createTempleCard(oldTemplesArray); // Show old temples
});

// Filter new temples (after 2000)
newTemplesButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newTemplesArray = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(',')[0].trim()); // Extract the year from the first part
       title.innerHTML ='New'
      return year > 2000;
  });
  createTempleCard(newTemplesArray); // Show new temples
});

    //filter large temples 
    largeTemplesButton.addEventListener("click", (e) => {
      e.preventDefault();
      const largeTemplesArray = temples.filter(temple => {
        return temple.area > 90000;
      })
       title.innerHTML ='Large'
      createTempleCard(largeTemplesArray); // Show large temples
      });

    smallTemplesButton.addEventListener("click", (e) =>{
      e.preventDefault()
      const smallTemplesArray = temples.filter(temple => {
        return temple.area < 10000
    })
     title.innerHTML ='Small'
    createTempleCard(smallTemplesArray); // Show small temples
    });

    createTempleCard(temples);
});
