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
let nombre = prompt("Ingrese el nombre");
let apellido = prompt("Ingresa tu apellido");
if((nombre != "") && (apellido != "")){
    console.log("Bienvenido/a " + nombre + " " + apellido);
} else {
    console.log("Los campos son requeridos");
}