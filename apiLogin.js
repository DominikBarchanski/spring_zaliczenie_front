function registerUser(userData) {
    fetch('http://127.0.0.1:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Added CORS headers
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify(userData)
    }).then(response => {
        console.log(response)
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    }).then(data => {
        console.log(data);
        // Save token and user email to local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.email);
        // Check if user is logged in
        checkUserLoggedIn();
    }).catch(error => {
        console.error('Error:', error);
        alert('Error: ' + error.message); // Show an alert to the user
    });
}

// Function to handle user login
function loginUser(userData) {
    fetch('http://127.0.0.1:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Added CORS headers
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify(userData)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error: ' + response.statusText);
        }
    }).then(data => {
        console.log(data);
        // Save token and user email to local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.username);
        // Check if user is logged in
        checkUserLoggedIn();
    }).catch(error => {
        console.error('Error:', error);
        alert('Error: ' + error.message); // Show an alert to the user
    });
}

