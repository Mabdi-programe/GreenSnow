document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const serviceRequest = document.getElementById('service-request');

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            serviceRequest: serviceRequest.value,
        };

        localStorage.setItem('contactFormData', JSON.stringify(formData));

        alert("Your Information has been logged into our system, Thanks!");

        form.submit();

    });

});
