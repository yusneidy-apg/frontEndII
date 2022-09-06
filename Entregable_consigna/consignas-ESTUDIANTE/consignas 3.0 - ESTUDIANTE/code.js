/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingrese su nombre ");
  datosPersona.edad = prompt("Ingrese su año de nacimiento ");
  while(isNaN(datosPersona.edad)){
    datosPersona.edad = prompt("Dato incorrecto, Ingrese su año de nacimiento.")
  }
  datosPersona.ciudad = prompt("ingrese la ciudad donde vive ")
  datosPersona.interesPorJs = confirm("¿Esta usted interesado en JS? ");

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const cardHeader = document.querySelector(".card-header")
  const datosDeUsuario = 
              `<h3>Nombre: <span id="nombre"> ${datosPersona.nombre}</span></h3>
               <h3>Edad: <span id="edad"> ${2022 - datosPersona.edad}</span></h3>
               <h3>Ciudad: <span id="ciudad">${datosPersona.ciudad}</span></h3>
               <h3>Interes en Javascript: <span id="javascript">${datosPersona.interesPorJs ? 'Si' : 'No'}</span></h3>`;

  cardHeader.innerHTML = datosDeUsuario;  

 }

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila");
 
  if(!fila.hasChildNodes()){
    listado.forEach(tarjeta => {
    let card = document.createElement('div');
    let imagen = document.createElement('img');
    let lenguaje = document.createElement('p');
    let bimestre = document.createElement('p');

    lenguaje.innerText = tarjeta.lenguajes;
    bimestre.innerText = tarjeta.bimestre;
    card.setAttribute ("class", "caja");
    imagen.setAttribute("src", tarjeta.imgUrl );
    imagen.setAttribute("alt", tarjeta.lenguajes);
    lenguaje.setAttribute("class", tarjeta.lenguajes);
    bimestre.setAttribute("class", tarjeta.bimestre);

    card.append(imagen, lenguaje, bimestre);

    fila.appendChild(card);
  
   });
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const tema = document.querySelector('#sitio');
  tema.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const body = document.querySelector('body');
let teclaF = document.querySelector('#sobre-mi')
body.addEventListener("keydown", function(e) {
    if (e.key.toUpperCase() == "f".toUpperCase()) {
      teclaF.classList.toggle('oculto')
    }
});
