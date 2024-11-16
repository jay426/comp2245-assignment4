document.getElementById("searchButton").addEventListener("click", function () {
    // Get the user input from the search field
    const searchQuery = document.getElementById("searchInput").value.trim();

    // Sanitize the input by encoding any special characters to prevent malicious code injection
    const sanitizedQuery = encodeURIComponent(searchQuery);

    // Build the URL with the query parameter
    const url = sanitizedQuery ? `superheroes.php?query=${sanitizedQuery}` : "superheroes.php";

    // Perform the AJAX request
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Expecting JSON data in response
        })
        .then(data => {
            // Get the result div to display the output
            const resultDiv = document.getElementById("result");

            // If no superhero is found, display the message
            if (data.error) {
                resultDiv.innerHTML = `<p>Superhero not found</p>`;
            } else {
                // Otherwise, display the superhero's data
                resultDiv.innerHTML = `
                    <h3>${data.alias}</h3>
                    <h4>${data.name}</h4>
                    <p>${data.biography}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
            document.getElementById("result").innerHTML = "<p>Failed to fetch superhero data. Please try again later.</p>";
        });
});
