
console.log('Inicio del Programa');
console.log(   alert("Bienvenidos") );
// Alert No retorna ningun valor

// Confim Retorna un boolean
console.log(  confirm('Validar') );

let nombre = prompt('Ingrese su nombre');
let numeroRandom;

    //  false ||  true
while(   confirm('¿Jugar?')   ){
    numeroRandom = Math.round(  Math.random() * (6 - 1) + 1 ); 
    alert('El dado dio ' + numeroRandom);
    console.log('número ' + numeroRandom);
}


console.log('Fin del programa');


let dia = parseInt( prompt('Ingrese el número del día') );
console.log(dia, typeof(dia));

const gatito = {
    nombre: 'Mei',
    color: 'Blanco',
    edad: 2
}

let gatitos = [
    {
        nombre: 'Mei',
        color: 'Blanco',
        especie: 'Gato',
        edad: 2
    },
    {
        nombre: 'Chimu',
        color: 'Negra',
        especie: 'Gato',
        edad: 10
    },
    {
        nombre: 'Gris',
        color: 'Blanco',
        especie: 'Gato',
        edad: 1
    }
]

for (const gatito of gatitos) {

    console.log(gatito.color)
}


// Itera sobre un objeto iterable, obteniendo las propiedad 
for (const propiedad in gatito) {
    console.log(propiedad);
    console.log('-----');
    console.log(  gatito[propiedad]  );
}


/*let edad = parseInt(prompt("Ingrese su edad"));

if(edad>18){
console.log("Es mayor de edad");
}else{
console.log("Es menor de edad");
}*/



//--------------------------JUEGO PIEDRA PAPEL TIJERA RESUELTO POR CATA----------------------
/*console.log('Selecciona una de las Opciones: \n 1. Piedra 2. Papel 3. Tijera')

//Para el usuario
let eleccionPersona= parseInt(prompt('Selecciona una de las Opciones: \n 1. Piedra 2. Papel 3. Tijera'))
console.log("eleccion Persona: "+eleccionPersona);

//Para la maquina
let eleccionMaquina=Math.round(Math.random()*(3-1)+1);
alert("eleccion Maquina: "+eleccionMaquina);
console.log("eleccion Maquina: "+eleccionMaquina);

//Juguemos!!
let ganador='';

//Escenarios: Gana el usuario

//Gana jugador
if(eleccionPersona==1 && eleccionMaquina==3)
    {ganador='Usuario'}
else if (eleccionPersona==3 && eleccionMaquina==2)
    {ganador='Usuario'}
else if (eleccionPersona==2 && eleccionMaquina==1)
    {ganador='Usuario'}
//Gana Maquina    
else if(eleccionMaquina==1 && eleccionPersona==3)
    {ganador='Maquina'}
else if (eleccionMaquina==3 && eleccionPersona==2)
    {ganador='Maquina'}
else if (eleccionMaquina==2 && eleccionPersona==1)
    {ganador='Maquina'}
//Empates
else 
    {ganador='Hubo empate!!!'}

//Codigos
let nombreEleeccionMaquina='';
switch(eleccionMaquina)
{
    case 1:
        nombreEleeccionMaquina='Piedra';
    break;  
    case 2:
        nombreEleeccionMaquina='Papel';
    break;  
    case 3:
        nombreEleeccionMaquina='Tijera';
    break;  
}


let nombreEleccionUsuario='';
switch(eleccionPersona)
{
    case 1:
        nombreEleccionUsuario='Piedra';
    break;  
    case 2:
        nombreEleccionUsuario='Papel';
    break;  
    case 3:
        nombreEleccionUsuario='Tijera';
    break;  
}

alert('Las elecciones fueron: \nMaquina: '+nombreEleeccionMaquina+"\nUsuario: "+nombreEleccionUsuario+"\n El ganador del juego es: "+ganador);


//-------------------------PIEDRA PAPEL TIJERA RESULTO GUADA---------
 Function juego(opcionUsuario,opcionMaquina){
    if(opcionUsuario === opcionMaquina){
        return EMPATE;
    }else if(opcionUsuario===PIEDRA){
        if (opcionMaquina===PAPEL){
            return PERDISTE;
        }else if(opcionMaquina===TIJERA){
            return GANASTE;
        }
    }else if(opcionUsuario===PAPEL){
        if(opcionMaquina===TIJERA){
            return PERDISTE;
        }else if(opcionMaquina===PIEDRA){
            return GANASTE;
        }
        else if (opcionUsuario===TIJERA){
            if(opcionMaquina===PIEDRA){
                return PERDISTE;
            }else if (opcionMaquina===PAPEL){
                return GANASTE;
            }
        }
    }
*/
/* ----------------------------------- yus ---------------------------------- */
/* -------------------------------------------------------------------------- */

 