// let == declarar y/o definir
// nombreDeLaVariable == definicion
// const nombreDeLaVariable = tipoDeDato
// concatenacion - nombreDeLaVariable = variable + variable
// console.log(mensaje o variable) = imprimir en pantalla
// alert = imprimir por pantalla en alerta
// prompt = guardar informacion y un leer. Pedir datos. let nombreDeLaVariable = prompt(cosas)
// parseFloat(nombreDeLaVariable) = convierte a float
// parseInt(nombreDeLaVariable) = le saca los decimales
// let nombre;
// let apellido;
// let edad = prompt("Ingresa tu edad");
// if(edad >= 18) {
//     console.log("Hola Bienvenido");
// } else {
//     console.log("No sos mayor de edad");
// }
// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ingresa tu apellido");
// if((nombre != "") && (apellido != "")){
//     console.log("Bienvenido/a " + nombre + " " + apellido);
// } else {
//     console.log("Los campos son requeridos");
// }
// while
// do while
// for(let i=0; i<10; i++){
 // console.log(i);
// }
// return = retorna
// function nombreDeLaVariable(conOSinParametro){}
// funncion felcha-- const nombreDeLaVariable = (parametros) => {return implisito}

// OBJETOS

// const objeto={
//     nombres:"loQueSea",
//     otroObjeto:{
//         nombress:"loQueSea"
//     }
// }
// LLAMAMOS
// console.log(objeto.nombres);
// console.log(objeto.otroObjeto.nombress);
// REASIGNAR VALORES
// objeto.nombres = "propiedad" (se puede concatenar)

// CONSTRUCTORES
// function algo(objeto1, objeto2) {
//     this.objeto1 = objeto1;
//     this.objeto2 = objeto2;
// }
// ASIGNAMOS
// const nombreDeLaVariable= new algo("cualquierCosa", "cualquierCosa2");
let nombre = prompt("Escribe tu nombre");
let apellido = prompt("Escribe tu apellido");
let pepe = true;
do{
    if((nombre != "") && (apellido != "")){
        pepe = false;
        console.log("Bienvenido/a " + nombre + " " + apellido);
    } else {
        nombre = prompt("Escribe tu nombre");
        apellido = prompt("Escribe tu apellido");
    }
}while(pepe == true);
let edad = prompt("Cual es tu edad");
if((edad >= 18) && (edad != "")){
    console.log("Sos mayor de edad, todo lo que hagas ya interviene la ley");
    
} else {
    console.log("No sos mayor de edad");
}