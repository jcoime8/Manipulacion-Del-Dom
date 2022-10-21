const titulo = document.querySelector('h1')
const parrafo1 = document.querySelector('.parrafo')
const parrafo2  = document.querySelector('#XD')
const imput = document.querySelector('input')
console.log(imput.value)
console.log({
    titulo,
    parrafo1,
    parrafo2,
    imput
})
titulo.innerHTML = 'muerte subita';
imput.innerText;
parrafo1.setAttribute('class', 'perro')
console.log(parrafo1.getAttribute('class'))
parrafo1.classList.add('azul')
parrafo1.classList.remove('perro')
imput.placeholder = 'hola night city'

const imgagen = document.createElement('img');

imgagen.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
parrafo2.innerHTML = "";
parrafo2.append(imgagen);




