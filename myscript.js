const modal = document.getElementById('mcontainer');

document.getElementById('hamenu').addEventListener('click', () => {
  modal.style.display = 'flex';
});

const close = document.getElementById('times');
close.onclick = function () {
  modal.style.display = 'none';
};

const portfoliopage = document.getElementById('portfoliopage');

portfoliopage.onclick = function () {
  modal.style.display = 'none';
};
const about = document.getElementById('aboutpage');

about.onclick = function () {
  modal.style.display = 'none';
};
const contact = document.getElementById('contactpage');

contact.onclick = function () {
  modal.style.display = 'none';
};
