document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display data from the server
    fetch('/getData')
        .then(response => response.json())
        .then(data => {
            document.getElementById('email').innerHTML = data.email;
            // Display other profile information similarly
        })
        .catch(error => console.error('Error:', error));
});