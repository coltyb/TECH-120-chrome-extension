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
            const substrings = ["B-Corp", "Fair Trade Certified", "Fairtrade International", "Fair for Life", "World Fair Trade Organization",
                "WFTO", "Fair Labor Association", "Fair Wear Foundation", "Fair Trade Federation", "Forest Stewardship Council", "Programme for the Endorsement of Forest Certification",
                "PEFC", "Cradle to Cradle", "Cradle to Cradle Certified", "LEED", "Green Seal", "Energy Star", "USDA Organic", "Organic", "Rainforest Alliance Certified",
                "Global Organic Textile Standard", "GOTS", "Bluesign Certified", "Carbon Trust Certification"];
            const regex = new RegExp(substrings.join("|"), "gi");
            const count = (html.split(regex).length - 1);
            console.log(count)
            document.getElementById("score").innerText = count;

            if (count > 0) {
                document.body.style.backgroundColor = "green";
            }
            else
            {
                document.body.style.backgroundColor = "red";
            }

        });
});
