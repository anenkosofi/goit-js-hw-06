const form = document.querySelector('.login-form');

const userData = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (!email.value || !password.value) {
    alert('Please fill in all the fields!');
  } else {
    userData.email = email.value;
    userData.password = password.value;
    console.log(userData);
    form.reset();
  }
}
