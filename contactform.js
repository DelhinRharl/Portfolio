const forms = document.getElementById('getForm');
const msg = document.getElementById('small');
const success = document.getElementById('success');
const email = document.getElementById('email');

function checkEmail(email) {
  return email === email.toLowerCase();
}
forms.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkEmail(email.value)) {
    msg.classList.add('showMessage');
    success.classList.remove('showSuccess');
    forms.submit();
  } else {
    msg.textContent = 'Please remove any uppercase!';
    msg.classList.remove('showMessage');
    success.classList.add('showSuccess');
    success.textContent = 'success';
  }
});
