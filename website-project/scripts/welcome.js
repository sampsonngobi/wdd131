function updatefooter(){

    const currentYear = new Date().getFullYear();
    document.querySelector('#currentyear').innerHTML = currentYear;

    const lastModified = document.lastModified;
    document.querySelector('#modified-date').innerHTML = lastModified;
};

updatefooter();