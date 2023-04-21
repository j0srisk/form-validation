import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <form>
      <label for="email">Email</label>
      <input type="email" name="email" required />
      <label for="country" >Country</label>
      <input type="text" name="country" pattern="[a-zA-Z\\s\\-]+" required />
      <label for="zipcode" >Zip Code</label>
      <input type="text" name="zipcode" pattern="\\d{5}(?:[-\\s]\\d{4})?" required />
      <label for="password" >Password</label>
      <input type="password" name="password" minlength="2" required />
      <label for="confirmPassword" >Confirm Password</label>
      <input type="password" name="confirmPassword" required />
      <input type="submit" class="submit-button" value="Submit" />
    </form>
`;

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    return;
  }

  if (form.elements.password.value !== form.elements.confirmPassword.value) {
    alert('Passwords do not match');
    event.preventDefault();
  }

  else {
    alert('High Five!');
  }
});

// add :invalid style to inputs
const inputs = form.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.checkValidity()) {
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
    }
  });
});
