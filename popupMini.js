// Define the URL of the webpage to scrape

// Get the current tab's URL
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url;
    url = tabs[0].url;
    console.log(url); // Output the URL to the console

    fetch(url)
        .then(response => response.text())
        .then(html => {
            console.log(html)
            const substrings = ["solar", "hydro", "renewable"];
            const regex = new RegExp(substrings.join("|"), "gi");
            const count = (html.split(regex).length - 1);
            console.log(count)
            document.getElementById("score").innerText = count;
        });
});
