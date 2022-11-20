function inicio(name, username, age, year){
    this.name = name;
    this.username = username;
    this.age = age;
    this.year= year;
}
const guardador = [];
function acceso(){
    let nombre = prompt("Escribe tu nombre");
    let apellido = prompt("Escribe tu apellido");
    let edad;
    let anio;
    let pepe = true;
    let gonza = 0;
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
        } while (isNaN(anio));
        let trueOFalse = 2021 - anio;
        console.log(trueOFalse);
        if(trueOFalse === edad){
            let usuario = new inicio(nombre, apellido, edad, anio);
            guardador.push(usuario);
            console.log(guardador);
            // console.log(usuario);
            console.log("Bienvenido a la pagina");
        }
    } else {
        alert("No sos mayor de edad");
    }
}
acceso();

const array=[
    "Argentina",
    "Italia",
    "Alemania",
    "Francia"
]
const input= document.querySelectorAll("input");
// console.log(input[0]);
const inputSearch= input[0];
const mensaje= document.querySelector("#nombre")
inputSearch.onkeydown= ()=>{
    console.log("Apretaste una tecla");
    mensaje.innerText= inputSearch.value;
}


const select = document.querySelector("select[name='paises']")
array.forEach(pais=>{
    let option = document.createElement("option")
    option.value=pais;
    option.innerText=pais;
    select.appendChild(option)
})
const opClick = document.querySelector("#paises");
opClick.onclick = ()=>{
    console.log("Hiciste Click");
}
const fcClick = document.querySelector("#datemin");
fcClick.onclick = ()=>{
    console.log("Hiciste Click");
}
const envClick = document.querySelector("#enviar");
envClick.onclick = ()=>{
    console.log("Hiciste Click");
}
const msjBoton = document.querySelector('#mensaje');
msjBoton.onkeydown= ()=>{
    console.log("Apretaste una letra");
}
const apBoton = document.querySelector('#apellido');
apBoton.onkeydown= ()=>{
    console.log("Apretaste una letra");
}
const mailBoton = document.querySelector('#correo');
mailBoton.onkeydown= ()=>{
    console.log("Apretaste una letra");
}

select.onchange= ()=>{
    let option= select.options[select.selectedIndex].value;
    console.log(option)
}

const formulario= document.querySelector("form");
formulario.onsubmit= (e)=>{
    e.preventDefault();
    // console.log(e.target);
    let formu= e.target;
    // console.log(formu);
    alert("formulario enviado");
    localStorage.setItem('Nombre', formu.children[1].value);
    localStorage.setItem('Apellido', formu.children[4].value);
    localStorage.setItem('Mail', formu.children[7].value);
    localStorage.setItem('Nacimiento', formu.children[20].value);
    sessionStorage.setItem('Mensaje', formu.children[24].value);
}
