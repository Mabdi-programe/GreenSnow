const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const serviceRequest = document.getElementById('service-request');

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            serviceRequest: serviceRequest.value,
        };

        localStorage.setItem('user', JSON.stringify(formData));

        modal.show();

    });

});
