
function calculateWindChill(temp, windSpeed) {
    // Formula for calculating windchill in Fahrenheit
    if (temp <= 50 && windSpeed > 3) {
        return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
    } else {
        return 'N/A';
    }
}

function displayWindChill() {
    const temp = 50; 
    const windSpeed = 5; 
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById('wind-chill').textContent = windChill.toFixed(4);
}

function updateFooter(){
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    const lastModified = document.lastModified;
    document.getElementById('modified-date').textContent = lastModified;
}
// Run the update functions when the page loads
document.addEventListener("DOMContentLoaded", function() {
    displayWindChill();
    updateFooter();
});




