document.getElementById('searchButton').addEventListener('click', function() {
    fetch('superheroes.php')
        .then(response => response.text())  // Convert the response to text
        .then(data => {
            alert(data);  // Display the data in an alert
        })
        .catch(error => {
            console.error('Error:', error);  // Log any errors to the console
        });
});