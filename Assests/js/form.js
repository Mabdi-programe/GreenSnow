const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const requestButton = document.querySelector('#service-request');

requestButton.addEventListener('click', function (event) {
  event.preventDefault();

  // create user object from submission
  const user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    phoneInput: phoneInput.value.trim(),
  };

  // set new submission to local storage
  localStorage.setItem('user', JSON.stringify(user));
});

