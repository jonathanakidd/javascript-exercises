const para1 = document.createElement('p');
para1.textContent = "Hey, I'm red!";

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";


//Black border and pink background
const div = document.createElement('div');
div.setAttribute('style', 'background: pink; border-Color: black; border-style: solid');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const para2 = document.createElement('p');
para2.textContent = "ME TOO!";

div.appendChild(h1) ;
div.appendChild(para2);



container.appendChild(para1);
container.appendChild(h3);
container.appendChild(div);

const btn = document.querySelector('#btn')

btn.addEventListener('click', function (e) {
    console.log(e);
  });

  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });