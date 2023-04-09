chrome.contextMenus.create({
    "title": "View Top Posts From This Subreddit",
    "contexts": ["selection"],
    "onclick": console.log("it works")
});