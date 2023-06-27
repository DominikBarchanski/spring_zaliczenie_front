"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.onload = function (event) {
    event.preventDefault();
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('login_form');
        if (form !== null) {
            form.addEventListener('submit', handleSubmit);
        }
    });
};
function handleSubmit(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault(); // To prevent the form from being submitted normally
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const password_confirmation = document.getElementById('password_confirmation').value;
        if (password !== password_confirmation) {
            console.error("Passwords do not match!");
            return;
        }
        let newUser = {
            firstName: name,
            email: email,
            password: password,
        };
        try {
            const response = yield fetch('http://127.0.0.1:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            if (response.ok) {
                const data = yield response.json();
                console.log(data);
            }
            else {
                console.error('Error: ' + response.status);
            }
        }
        catch (error) {
            console.error('Error: ' + error);
        }
        event.stopPropagation();
    });
}
