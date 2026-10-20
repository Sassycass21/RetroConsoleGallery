Retro Console Gallery

GitHub Repository:
https://github.com/Sassycass21/RetroConsoleGallery

API Request;
When the Load Consoles button is clicked, JavaScript creates an XMLHttpRequest object, opens a GET request to the Retro Consoles API, and sends the request.
When readyState is 4 and the status is 200, JSON.parse() converts the responseText into a JavaScript object so the console data can be displayed on the page.

Summary:
The total number of consoles is calculated using consoleArray.length. A loop goes through each console and compares its release year to the current oldest and newest consoles. If a console has an earlier or later year, the appropriate variable is updated, and the results are displayed in the summary.