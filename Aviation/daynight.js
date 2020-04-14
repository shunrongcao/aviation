let img = document.querySelector('.windowImage img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn0.addEventListener('click', () => {
	img.src= 'window0.png';
});

btn1.addEventListener('click', () => {
	img.src= 'window1.png';
});

btn2.addEventListener('click', () => {
	img.src= 'window2.png';
});

btn3.addEventListener('click', () => {
	img.src= 'window3.png';
});