
//Step 2 - request the data

// add event listener for button
const loadButton = document.getElementById("loadConsoles");

loadButton.addEventListener("click", function () {
    console.log("Button clicked!");

    // send a GET request to the API
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json");

    xhr.onreadystatechange = pullConsoles;

    // parse the data when ready

    function pullConsoles() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var consoles = xhr.responseText;
            var consoleObj = JSON.parse(consoles);
            var consoleArray = consoleObj.consoles;

            console.log(consoleObj);
            console.log(consoleArray);

            renderConsoles(consoleArray);
        }
    };

    xhr.send();

});

// Step 3: Display the consoles

function renderConsoles(consoleArray) {
    const consoleCards = document.getElementById("consoleCards");
    consoleCards.innerHTML = "";

    const totalConsoles = consoleArray.length;

    let oldest = consoleArray[0];
    let newest = consoleArray[0];

    for (let console of consoleArray) {
        if (console.year < oldest.year) {
            oldest = console;
        }

        if (console.year > newest.year) {
            newest = console;
        }
    }

    const summary = document.getElementById("consoleSummary");

    summary.textContent = totalConsoles + " consoles · Oldest: " +
        oldest.name + " (" + oldest.year + ")" +
        " · Newest: " + newest.name + " (" + newest.year + ")";

    consoleArray.forEach((console) => {
        const card = document.createElement("div");

        const img = document.createElement("img");
        img.src = console.image;
        img.alt = console.name;

        const title = document.createElement("h2");
        title.textContent = console.name;

        const details = document.createElement("p");
        details.textContent = console.manufacturer + " - " + console.year;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(details);
        consoleCards.appendChild(card);

    });
};