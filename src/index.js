import './style.css';

console.log('hello world')

const content = document.querySelector('#content')

const para = document.createElement('p')

content.appendChild(para)

para.classList.add('para')

para.textContent = 'poooooop'

const randomImage1 = document.createElement('img')

randomImage1.classList.add('randomImage1')