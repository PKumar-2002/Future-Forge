document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //let data = new FormData(form);
        // fetch('https://script.google.com/macros/s/AKfycbxjlF8Wj1lSfQWDZzD1tmhwuGrjAb4X5amUoEYsAHHMeL-LJtAwlsxSWmnVhCX3O-EY/exec', {
        //         method: 'POST',
        //         body: data
        //     })
        //     .then(res => res.text())
        //     .then(data => {
        //         console.log(data);
                navigateToNextPage();
            // })
            // .catch(error => console.error('Error:', error));
    });

    function navigateToNextPage() {
        console.log('Navigating to Target.html');
        // Change 'target.html' to the desired HTML page you want to link to
        window.location.href = '../Dashboard/dashboard.html';
    }


    // Attach the navigateToNextPage function to the Sign Up button
    let submitButton = document.getElementById('submit');
    if (submitButton) {
        submitButton.addEventListener('click', navigateToNextPage);
    }
});
