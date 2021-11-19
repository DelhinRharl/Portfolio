const names = document.getElementById('name');
const emails = document.getElementById('email');
const text = document.getElementById('texta');

const userInfo = {
  Name: names,
  Email: emails,
  Message: text,
};

names.addEventListener('input', (e) => {
  e.preventDefault();

  userInfo.Name = names.value;

  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});

emails.addEventListener('input', (e) => {
  e.preventDefault();

  userInfo.Email = emails.value;

  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});
text.addEventListener('input', (e) => {
  e.preventDefault();

  userInfo.Message = text.value;

  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});

const data = JSON.parse(localStorage.getItem('userInfo'));
userInfo.Name = data.Name;
userInfo.Email = data.Email;
userInfo.Message = data.Message;

text.value = userInfo.Message;
emails.value = userInfo.Email;
names.value = userInfo.Name;
