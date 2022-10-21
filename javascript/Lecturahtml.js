const txbox1 = document.querySelector('#calculo1');
const txbox2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btnCalcular');
const parrafo = document.querySelector('.nuevo')


function btnclick(){
    n1 = Number(txbox1.value);
    n2 = Number(txbox2.value);
    alert(n1 + n2);
}
boton.addEventListener('click',concatenar);
function concatenar(){
    let concate = txbox1.value + txbox2.value;
    parrafo.innerText = "el resultado de la concatenacion es:" +  concate;  
}