
//Step 2 - request the data

// add event listener for button
const loadButton = document.getElementById("loadConsoles");

loadButton.addEventListener("click", function() {
    console.log("Button clicked!");

    // send a GET request to the API
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json");

    xhr.onreadystatechange = pullConsoles;

    // parse the data when ready

    function pullConsoles() {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var consoles = xhr.responseText;
            var consoleObj = JSON.parse(consoles);
            var consoleArray = consoleObj.consoles;
            
            console.log(consoleObj);
            console.log(consoleArray);
        }
    };

    xhr.send();
    
});