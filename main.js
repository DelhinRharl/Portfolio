const myArray = [{
  times: './Images/Iconx.jpg',
  heading: 'Tonic ',
  canopy: 'CANOPY',
  counter: '',
  back: 'Back End Dev',
  year: 2015,
  snapshot: './Images/SnapshootPortfolio.jpg',
  primarytext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  html: 'html',
  css: 'css',
  javs: 'javascript',
  seelive: './Images/live.svg',
  seeliveimg: './Images/Icon.jpg',
  seesource: './Images/source.svg',
  seesourceimage: './Images/Vector.jpg',
},
{
  times: './Images/Iconx.jpg',
  heading: 'Multi-Post Sories',
  canopy: 'CANOPY',
  counter: './Images/Counter.jpg',
  back: 'Back End Dev',
  year: '2015',
  snapshot: './Images/SnapshootPortfolio.jpg',
  primarytext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  html: 'html',
  css: 'css',
  javs: 'javascript',
  seelive: './Images/live.svg',
  seeliveimg: './Images/Icon.jpg',
  seesource: './Images/source.svg',
  seesourceimage: './Images/Vector.jpg',
},
{
  times: './Images/Iconx.jpg',
  heading: 'Tonic ',
  canopy: 'CANOPY',
  counter: './Images/Counter.jpg',
  back: 'Back End Dev',
  year: 2015,
  snapshot: './Images/SnapshootPortfolio.jpg',
  primarytext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  html: 'html',
  css: 'css',
  javs: 'javascript',
  seelive: './Images/live.svg',
  seeliveimg: './Images/Icon.jpg',
  seesource: './Images/source.svg',
  seesourceimage: './Images/Vector.jpg',
},
{
  times: './Images/Iconx.jpg',
  heading: 'Tonic ',
  canopy: 'CANOPY',
  counter: './Images/Counter.jpg',
  back: 'Back End Dev',

  year: 2015,
  snapshot: './Images/SnapshootPortfolio.jpg',
  primarytext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  html: 'html',
  css: 'css',
  javs: 'javascript',
  seelive: './Images/live.svg',
  seeliveimg: './Images/Icon.jpg',
  seesource: './Images/source.svg',
  seesourceimage: './Images/Vector.jpg',
},
];

// create the divs
const popupSection = document.createElement('section');
const leftblock = document.createElement('div');
const andTimes = document.createElement('img');
const tonic = document.createElement('h3');
const frame = document.createElement('ul');
const frameLi1 = document.createElement('li');
const frameLi2 = document.createElement('li');
const frameLi3 = document.createElement('li');
const frameLi4 = document.createElement('li');
const frameLi5 = document.createElement('li');
const canopy = document.createElement('p');
const year = document.createElement('p');
const backend = document.createElement('p');
const countera = document.createElement('p');
const counterb = document.createElement('p');
const snapshoot = document.createElement('img');
const midtextcontainer = document.createElement('div');
const midtext = document.createElement('div');
const midtextp = document.createElement('p');
const technologies = document.createElement('ul');
const techbtn = document.createElement('div');
const firstLi = document.createElement('li');
const secondLi = document.createElement('li');
const ThirdLi = document.createElement('li');
const taga = document.createElement('p');
const tagb = document.createElement('p');
const tagc = document.createElement('p');
const btnholder = document.createElement('div');
const seeLive = document.createElement('img');
const seeLivetext = document.createElement('p');
const seeLiveImage = document.createElement('img');
const seeSource = document.createElement('img');
const seeSourceImage = document.createElement('img');
const seeSourceText = document.createElement('p');

// append
const body = document.querySelector('body');
body.appendChild(popupSection);
popupSection.appendChild(leftblock);
leftblock.appendChild(andTimes);
leftblock.appendChild(tonic);
leftblock.appendChild(frame);
leftblock.appendChild(snapshoot);
leftblock.appendChild(midtext);
leftblock.appendChild(technologies);
leftblock.appendChild(midtextcontainer);
midtextcontainer.appendChild(midtext);
midtextcontainer.appendChild(technologies);
midtextcontainer.appendChild(btnholder);
midtextcontainer.appendChild(techbtn);
frame.appendChild(frameLi1);
frameLi1.append(canopy);
frameLi2.append(counterb);
frameLi3.append(backend);
frameLi4.append(countera);
frameLi5.append(year);
frame.append(frameLi3);
frame.append(frameLi4);
frame.append(frameLi3);
frame.append(frameLi5);
frame.append(frameLi2);
midtext.append(midtextp);
technologies.appendChild(firstLi);
technologies.appendChild(secondLi);
technologies.appendChild(ThirdLi);
firstLi.append(taga);
secondLi.append(tagb);
ThirdLi.append(tagc);
btnholder.append(seeLive);
btnholder.append(seeSource);
seeLive.appendChild(seeLivetext);
seeLive.appendChild(seeLiveImage);
seeSource.appendChild(seeSourceText);
seeSource.appendChild(seeSourceImage);

popupSection.setAttribute('id', 'popupSection');
leftblock.setAttribute('id', 'leftblock');
andTimes.setAttribute('id', 'timess');
tonic.setAttribute('id', 'tonicp');
frame.setAttribute('id', 'framep');
snapshoot.setAttribute('id', 'snaps');
midtextcontainer.setAttribute('id', 'midtextcontainer');
midtext.setAttribute('id', 'midtexta');
technologies.setAttribute('id', 'techno');
techbtn.setAttribute('id', 'techbtn');
seeLive.setAttribute('id', 'seeLive');
seeSource.setAttribute('id', 'seeSource');
frameLi1.setAttribute('id', 'cann');
frameLi2.setAttribute('id', 'year');
frameLi3.setAttribute('id', 'backend');
frameLi4.setAttribute('id', 'counts');
frameLi5.setAttribute('id', 'countsb');
midtextp.setAttribute('id', 'midtextp');
firstLi.setAttribute('id', 'htmlp');
secondLi.setAttribute('id', 'cssp');
ThirdLi.setAttribute('id', 'javasc');
taga.setAttribute('id', 'htma');
tagb.setAttribute('id', 'cssa');
tagc.setAttribute('id', 'javasa');
btnholder.setAttribute('id', 'butonholder');
seeLivetext.setAttribute('id', 'livetext');
seeLiveImage.setAttribute('id', 'seeimg');
seeSourceText.setAttribute('id', 'sourcetext');
seeSourceImage.setAttribute('id', 'seeimage');

// add the values from array

function makeCard() {
  document.getElementById('timess').src = myArray[0].times;
  document.getElementById('tonicp').innerHTML = myArray[0].heading;
  document.getElementById('cann').innerHTML = myArray[0].canopy;
  document.getElementById('counts').src = myArray[0].counter;
  document.getElementById('year').innerHTML = myArray[0].year;
  document.getElementById('backend').innerHTML = myArray[0].back;
  document.getElementById('countsb').src = myArray[0].counter;
  document.getElementById('snaps').src = myArray[0].snapshot;
  document.getElementById('midtextp').innerHTML = myArray[0].primarytext;
  document.getElementById('htma').innerHTML = myArray[0].html;
  document.getElementById('cssa').innerHTML = myArray[0].css;
  document.getElementById('javasa').innerHTML = myArray[0].javs;
  document.getElementById('seeLive').src = myArray[0].seelive;
  document.getElementById('seeSource').src = myArray[0].seesource;
}
makeCard();

function makeCardB() {
  document.getElementById('tonicp').innerHTML = myArray[1].heading;
  document.getElementById('timess').src = myArray[0].times;
  document.getElementById('cann').innerHTML = myArray[1].canopy;
  document.getElementById('counts').src = myArray[1].counter;
  document.getElementById('year').innerHTML = myArray[1].year;
  document.getElementById('backend').innerHTML = myArray[1].back;
  document.getElementById('countsb').src = myArray[1].counter;
  document.getElementById('snaps').src = myArray[1].snapshot;
  document.getElementById('midtextp').innerHTML = myArray[1].primarytext;
  document.getElementById('htma').innerHTML = myArray[1].html;
  document.getElementById('cssa').innerHTML = myArray[1].css;
  document.getElementById('javasa').innerHTML = myArray[1].javs;
  document.getElementById('seeLive').innerHTML = myArray[1].seelive;
  document.getElementById('seeSource').innerHTML = myArray[1].seesource;
}
makeCardB();

function makeCardC() {
  document.getElementById('tonicp').innerHTML = myArray[2].heading;
  document.getElementById('timess').src = myArray[0].times;
  document.getElementById('cann').innerHTML = myArray[2].canopy;
  document.getElementById('counts').src = myArray[2].counter;
  document.getElementById('year').innerHTML = myArray[2].year;
  document.getElementById('backend').innerHTML = myArray[2].back;
  document.getElementById('countsb').src = myArray[2].counter;
  document.getElementById('snaps').src = myArray[2].snapshot;
  document.getElementById('midtextp').innerHTML = myArray[2].primarytext;
  document.getElementById('htma').innerHTML = myArray[2].html;
  document.getElementById('cssa').innerHTML = myArray[2].css;
  document.getElementById('javasa').innerHTML = myArray[2].javs;
  document.getElementById('seeLive').innerHTML = myArray[2].seelive;
  document.getElementById('seeSource').innerHTML = myArray[2].seesource;
}
makeCardC();

function makeCardD() {
  document.getElementById('tonicp').innerHTML = myArray[3].heading;
  document.getElementById('timess').src = myArray[0].times;
  document.getElementById('cann').innerHTML = myArray[3].canopy;
  document.getElementById('counts').src = myArray[3].counter;
  document.getElementById('year').innerHTML = myArray[3].year;
  document.getElementById('backend').innerHTML = myArray[3].back;
  document.getElementById('countsb').src = myArray[3].counter;
  document.getElementById('snaps').src = myArray[3].snapshot;
  document.getElementById('midtextp').innerHTML = myArray[3].primarytext;
  document.getElementById('htma').innerHTML = myArray[3].html;
  document.getElementById('cssa').innerHTML = myArray[3].css;
  document.getElementById('javasa').innerHTML = myArray[3].javs;
  document.getElementById('seeLive').innerHTML = myArray[3].seelive;
  document.getElementById('seeSource').innerHTML = myArray[3].seesource;
}
makeCardD();

// define the buttons

const popup = document.getElementById('popupSection');

document.getElementById('seeproject1').addEventListener('click', () => {
  popup.style.display = 'block';

  makeCard();
});
document.getElementById('seeproject2').addEventListener('click', () => {
  popup.style.display = 'block';

  makeCardB();
});

document.getElementById('seeproject3').addEventListener('click', () => {
  popup.style.display = 'block';

  makeCardC();
});
document.getElementById('seeproject4').addEventListener('click', () => {
  popup.style.display = 'block';

  makeCardD();
});

// buttons
document.getElementById('seeLive').addEventListener('click', () => {
  window.open('https://delhinrharl.github.io/Portfolio/');
});
document.getElementById('seeSource').addEventListener('click', () => {
  window.open('https://github.com/DelhinRharl/Portfolio');
});
document.getElementById('timess').addEventListener('click', () => {
  popup.style.display = 'none';
});