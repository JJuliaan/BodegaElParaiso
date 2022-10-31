function acceso(){
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
        console.log("Sos mayor de edad, disfruta de la pagina");
        
    } else {
        console.log("No sos mayor de edad, vuelve cuando lo seas"); //aca tengo la idea de que no le inicie la pagina por ser menor
    }
}
acceso();

// let == declarar y/o definir
// nombreDeLaVariable == definicion
// const nombreDeLaVariable = tipoDeDato
// concatenacion - nombreDeLaVariable = variable + variable
// console.log(mensaje o variable) = imprimir en pantalla
// alert = imprimir por pantalla en alerta
// prompt = guardar informacion y un leer. Pedir datos. let nombreDeLaVariable = prompt(cosas)
// parseFloat(nombreDeLaVariable) = convierte a float
// parseInt(nombreDeLaVariable) = le saca los decimales

// isNaN(precio) (validas que sea numero)
// Algo.toLowerCase(devuelve todas las letras en minisculas)
// algo.toUpperCase(devuelve todas las letras en mayusculas) 

// let nombre;
// let apellido;
// function names(name, surname){
//     if((name != "") && (surname != "")){
//         return("Bienvenido/a " + name + " " + surname);
//     } else {
//         return("Los campos son requeridos");
//     }
// }
// let edad = prompt("Ingresa tu edad");
// if(edad >= 18) {
//     console.log("Hola Bienvenido");
//     let nombre = prompt("Ingrese el nombre");
//     let apellido = prompt("Ingresa tu apellido");
//     names(nombre, apellido);
// } else {
//     console.log("No sos mayor de edad");
// }
// while
// do while
// for(let i=0; i<10; i++){
 // console.log(i);
// }
// return = retorna
// function nombreDeLaVariable(conOSinParametro){}
// funncion felcha-- const nombreDeLaVariable = (parametros) => {return implisito}

const { Algo } = require("sshpk");

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
<<<<<<< HEAD
// console.log("objeto" in algo) (pregunta si esta esa propiedad)
// for(const propiedad in algo){
//     console.log(algo[propiedad])
// } (trae todas las propiedades)

// let frase ="hola papa "
// string console.log(frase.length); (toma la longitud de la palabra)
// console.log(frase.toLowerCase); (pone todo en minisculas)
// console.log(frase.toUpperCase); (pone todo en mayusculas)
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
=======
// length (longitud)
// ARRAYS
// const array1=["hola", "soy", "un", "array"];
// const array2=[1,2,3,4,5,6,5,1,3,8];
// // const array3=[1,2,3,"bkas",5, 50.5];
// // console.log(array1);
// console.log(array2);
// // console.log(array3);

// // AGREGAR ELEMENTOS
// array2.push(55, "hola");
// console.log(array2);

// // UNSHIFT (agrega elementos al principio)
// array2.unshift(100);
// console.log(array2);

// // ELIMINAR EL ULTIMO
// array2.pop();
// console.log(array2);

// // ELIMINAR EL PRIMERO
// array2.shift();
// console.log(array2);

// // ELIMINAR POSICION DETERMINADA
// array2.splice(5,1); // arrancas de la posicion 5 y elimina 1
// console.log(array2);

// // NOS DEVUELVE UN STRING DE MI ARRAY
// console.log(array2.join("\n"));

// // CONCATENAR OTRO ARRAY
// const unidos = array2.concat(array1);
// console.log(unidos);

// // CREA UNA COPIA
// const copiaSlice = array2.slice(0,8); //Desde la posicion 2 hasta las 6 (pero la 6ta no la incluye)
// console.log(array2);
// console.log(copiaSlice);

// // ME DEVUELVE LA POSICION EN LA QUE ESTA EL DETERMINADO ELEMENTO QUE LE PASE
// console.log(unidos);
// console.log(unidos.indexOf("soy"));

// // EXISTE TAL ELEMENTO EN MI ARRAY (TRUE O FALSE)
// console.log(unidos.includes(3));

//EJEMPLO
// function Productos(nombre, precio, stock) {
//     this.nombre = nombre
//     this.precio = precio 
//     this.stock = stock
// }
// const producto1 = new Productos("arroz", 100, 120);
// const producto2 = {nombre:"salame", precio:110, stock:100};

// const alacena=[];
// console.log(alacena);

// alacena.push(producto1, producto2);
// console.log(alacena);

// alacena.push({nombre: "queso", precio:150, stock:50});
// console.log(alacena);

// for(let index = 0; index < alacena.length; index++){
//     console.log(alacena[index]);
// }

// const persona= {nombre: "Manuel", amigos: [{nombre: "Julio"}, {nombre: "Maria"}]};
// console.log(persona.amigos[1].nombre);

// array.forEach(element => {
//     console.log(elemnto)
// }); (devuelve todo el array por linea)

// const encontrado= array.find[()=>{
//     return array.precio = 200
// }]; (devuelve el primer producto que encuentre con esas caracteristicas)

// const filtrado = array.filter[(producto)=>{
//     return producto.nombre.includes("Pa")
// }]; (devuelve un array con todos los elementos encontrados, puede ser con numeros sin mas)

// let existe = array.some[(el)=>{
    // return array.nombre.includes(pa)
// }] (devuelve si esta o no en true o false)

// const precio = array.map[(el)=>{
//  return el.precio
// }] (devuelve un array con la condicion que le pasemos)
// const precio = array.map[(el)=>{
//  return {
    // id: el.id
    // nombre: el.nombre
    // precio: el.precio + 200
// }
// }]

// const totalCapital= array.reduce[(acc(acumulador), el)=>{
    // return acc + el;
// },0(es el valor inicial del acumulador)(depende de si trabajes con numeros)] (devuelve la suma total del array )

// console.log(Math(tiene muchos elementos para trabajar).PI)
// Math.floor(devuelve sin decimales)
>>>>>>> JS
