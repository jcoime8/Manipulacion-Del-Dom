function nuevo(limite){
    let estudiantes = []
    for(i = 0; i <=limite; i++){
    let estudiante = prompt("nombres del estudiante")
    estudiantes.push(estudiante);
}
console.log(estudiantes);

}
let r = prompt("cuanto es 2 + 2");
while(r !='4'){
    p = prompt("cuanto es 2 + 2");
    r = p;
}
alert("Felisidades")


function imprimir(arreglo){
    for(let i=0; i<arreglo.length; i++){
        console.log(arreglo[i]);
    }
}

function imprimirObjeto(obj){
    const arre = Object.values(obj)
    for(let i=0; i<arre.length;i++){
        console.log(arre[i]);
    }
}

function especificar(tiposuscribcion=prompt('tipo de suscripcion')){
const suscripcion = {
    free:'gratis',
    Expert:'expeto',
    Expertduo:'experto mas un compañero'
}

if(suscripcion[tiposuscribcion]){
    console.log(suscripcion[tiposuscribcion])
}
}