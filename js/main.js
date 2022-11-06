function inicio(name, username, age, year){
    this.name = name;
    this.username = username;
    this.age = age;
    this.year= year;
}
const guardador = [];
function mostrarResta(ani, ag){
    let verdaderaEdad = 2022 - ani;
    return("La resta entre el año que naciste y tu edad son incorrectos, tu edad es " + ag + " y tu año de nacimiento es " + ani + " con lo cual tenes " + verdaderaEdad + " años");
}
function acceso(){
    let nombre = prompt("Escribe tu nombre");
    let apellido = prompt("Escribe tu apellido");
    let edad;
    let anio;
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
    do {
        console.log("Lo ingresado debe se un numero");
        edad = parseInt(prompt("Cual es tu edad"));
    } while (isNaN(edad));
    if((edad >= 18)){
        do {
            anio = parseInt(prompt("En que año naciste"));
        } while ((isNaN(anio)) && (anio>= 1930 && anio <=2004)); //(Otra consulta como pongo que el año que escriba no sea mayor a .... y menor a .... porque no funciona)
        let trueOFalse = 2022 - anio  ;
        console.log(trueOFalse);
        if(trueOFalse === edad){
            let usuario = new inicio(nombre, apellido, edad, anio);
            guardador.push(usuario);
            console.log(guardador);
            // console.log(usuario);
            console.log("Bienvenido a la pagina");
        } else {
            console.log("Sos un fraude");
            console.log(mostrarResta(anio, edad));
        }
        // do {
        //     anio = parseInt(prompt("En que año naciste"))
        // } while ((isNaN(año)) && (anio.length = 4)); (profe queria usar este do while pero no me funciona me podria decir el error)
    } else {
        console.log("No sos mayor de edad");
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

//EJEMPLO ARRAY
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

// DOOM

// te hace ver lo del documento
// console.dir(document);
// console.dir(document.head);

// ACCEDER A LOS NODOS

// accede por id
// const titulo=document.getElementById(papapapa);
// console.log(titulo);

// accede por la clase
// const lista= document.getElementsByClassName("navbar-nav");
// console.log (lista);

// accede a los elementos por su etiqueta
// const div = document.getElementsByTagName("div");
// console.log(div);

// acceder a los elementos
// console.log(div[1].innerHTML(que tiene adentro));
// console.log(div[0]);

// puede ver y permite modificar
// console.log(div[1].innerText= "Incio");

// PODER ACCEDER A LOS ELEMENTOS
// const titulo = document.querySelector("button");
// console.log(titulo);

// CLICKS BOTONES
// const btnBuscar= document.querySelector(".navbar-toggler");
// console.log(btnBuscar);

// btnBuscar.addEventListener("click", ()=>{
//     console.log("Hiciste CLick");
// })
// otra forma todos los prefijos empiezan con el onNombreDelEvento
// btnBuscar.onclick= ()=>{
//     console.log("HCiciste CLick");
// }
// btnBuscar.addEventListener("mouseup", ()=>{
//     console.log("Hiciste CLick");
// })
// btnBuscar.onmouseup = ()=>{
//     console.log("Hiciste CLick");
// }(Me gusta)
// btnBuscar.onmouseover= ()=>{
//     console.log("pasar el mouse por arriba");
// }
// btnBuscar.onmouseout= ()=>{
//     console.log("Salir del mouse arriba");
// }
// const array=[
//     "Argentina",
//     "Italia",
//     "Alemania",
//     "Francia"
// ]
// const input= document.querySelectorAll("input");
// console.log(input[0]);
// const inputSearch= input[0];
// // const mensaje= document.querySelector("#nombre")
// inputSearch.onkeydown= ()=>{
//     console.log("Apretaste una tecla");
    // mensaje.innerText= inputSearch.value;
//}

// const select = document.querySelector("select[name='paises']")
// array.forEach(pais=>{
//     let option = document.createElement("option")
//     option.value=pais;
//     option.innerText=pais;
//     select.appendChild(option)
// })
// change
// select.onchange= ()=>{
//     let option= select.options[select.selectedIndex].value;
//     console.log(option)
// }
// enevnto input
// inputSearch.oninput

// const formulario= document.querySelector("form");
// console.log(formulario);
// formulario.onsubmit= (e)=>{
//     e.preventDefault(); //(Buen objeto)
//     //console.log(e.target);
//     let formu= e.target;
//     // console.log(formu);
//     console.log(formu.children[1].value);
//     console.log(formu.children[4].value);
//     console.log(formu.children[7].value);
//     console.log(formu.children[9].value);
//     console.log(formu.children[10].value);
//     console.log(formu.children[11].value);
//     console.log(formu.children[18].value);
//     console.log(formu.children[20].value);
//     console.log("formulario enviado");
// }