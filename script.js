//const { response } = require("express");

let currentPage = 1;
let totalPages = null;

function displayIssues(page) {
    fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
        .then(response => response.json())
        .then(data => {
            const issuesList = document.getElementById("issuesList");
            issuesList.innerHTML = "";
            data.forEach(issue => {
                const li = document.createElement("li");
                li.innerHTML = issue.title;
                issuesList.appendChild(li);
            });

            document.getElementById("pageNumber").innerHTML = `Page number ${page}`;
            totalPages = response.headers.get("Link").split(",")[1].match(/page=(\d+)/)[1];
        })
        .catch(error => console.error(error))
}

displayIssues(currentPage);

document.getElementById("load_next").addEventListener("click", function() {
    if (currentPage < totalPages) {
        currentPage++;
        displayIssues(currentPage);
    }
});

document.getElementById("load_prev").addEventListener("click", function() {
    if (currentPage > 1) {
        currentPage--;
        displayIssues(currentPage);
    }
});