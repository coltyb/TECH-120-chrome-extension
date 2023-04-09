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
        //const madeInElement = doc.querySelector(".made-in");
        //const madeInText = madeInElement.textContent;

        // Output the "Made In" information to the console
        console.log(doc);
    });