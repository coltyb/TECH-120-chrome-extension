// Define the URL of the webpage to scrape
const url = "https://www.example.com/product";

// Make a request to the webpage and scrape the "Made In" information
fetch(url)
    .then(response => response.text())
    .then(html => {
        // Parse the HTML response using a DOM parser
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Find the element containing the "Made In" information and extract its text content
        const madeInElement = doc.querySelector(".made-in");
        const madeInText = madeInElement.textContent;

        // Output the "Made In" information to the console
        console.log(`This product was made in ${madeInText}.`);

// Get the current location of the computer
   navigator.geolocation.getCurrentPosition(position => {
    const currentLat = position.coords.latitude;
    const currentLng = position.coords.longitude;

    // Prompt the user to enter a destination
    const destination = madeInText; //renames the "madeInText" constant as "destination"

    // Query the Google Maps API for the destination location
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=YOUR_API_KEY`) //need to replace this with my own API key - need to figure out how to do this
        .then(response => response.json())
        .then(data => {
            const destLat = data.results[0].geometry.location.lat;
            const destLng = data.results[0].geometry.location.lng;

            // Calculate the distance between the two locations using the Haversine formula
            const R = 6371; // Earth's radius in km
            const dLat = (destLat - currentLat) * Math.PI / 180;
            const dLng = (destLng - currentLng) * Math.PI / 180;
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(currentLat * Math.PI / 180) * Math.cos(destLat * Math.PI / 180) *
                Math.sin(dLng / 2) * Math.sin(dLng / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c;

            // Output the distance to the console
            console.log(`The distance from ${destination} to your current location is ${distance.toFixed(2)} km.`);

   // Define the URL of the webpage to scrape
   const url = "https://www.example.com/product";
   // Make a request to the webpage and scrape the weight information
        fetch(url)
           .then(response => response.text())
           .then(html => {
          // Parse the HTML response using a DOM parser
          const parser = new DOMParser();
               const doc = parser.parseFromString(html, "text/html"); //most likely don't need any of this duplicate part


              // Find the element containing the weight information and extract its text content
              const weightElement = doc.querySelector(".weight");
              const weightText = weightElement.textContent;

              // Output the weight information to the console
              console.log(`This product weighs ${weightText}.`);
   
          // compute the amount of carbon dioxide burned by shipping the package via ground, ship, or air
               const truckCO2 = weightElement
               const planeCO2 = weightElement * distance * 0.303
               const shipCO2 = weightElement * distance * 0.018
               const truckText = truckCO2.textContent;
               const planeText = planeCO2.textContent;
               const shipText = shipCO2.textContent; 
               console.log(`The amount of carbon dioxide burned shipping it via ground is roughly ${truckText}.` ); //output info to the console
               console.log(`The amount of carbon dioxide burned shipping it via ship is roughly ${shipText}.` ); //output info to the console
               console.log(`The amount of carbon dioxide burned shipping it via air is roughly ${planeText}.` ); //output info to the console
        })
        .catch(error => {
            console.error(error);
        });
}, error => {
    console.error(error);
});
>>>>>>> Stashed changes
