
const premioTotal = 2500;
const casilla = 10;

let casillaArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function calcular(aciertos){
    let usuario = prompt('Ingrese un numero');
    let tragamoneda = parseInt (Math.random() * (100-1)+1);
   

   if (usuario == 1) {

    
   }
for (let i = 1; i < casillaArray.length; i++) {
    const element = array[i];
    
}

}

/* ---------------------------- SOLUCION DE CATA ---------------------------- 
const premioTotal=2500;
const casillas=10;
let premioOtorgado=0;


function calcular(pAciertos){
    premioOtorgado=(2500*pAciertos)/10;
    return premioOtorgado;
}

function tragamonedas(){
    alert('Presiona el botón para calcular tus aciertos (de 1 a 10)');
    let aciertos=parseInt(Math.random()*(10-1)+1);
    console.log("aciertos: "+aciertos);
    alert('El número de aciertos es: '+aciertos);
    alert('El premio otorgado es: '+calcular(aciertos));
}


let objetoJuego = prompt('Ingresa el objeto o lugar con el que soñaste ayer: ');
let aleatorio=parseInt(Math.random()*(3-0)+0);

function resultadoLoteria(aleatio)
{
    if(aleatorio==0)
    {
        premio=1000;
    } else if(aleatorio==1 || aleatorio==2){
        premio=10000;
    }else if(aleatorio==3){
        premio=100000;
    }
    return premio;
}*/

/*---------- RULETA------------------
// Crear una función que sortee un numero random ganador, luego haga un ciclo
// desde 1 hasta el final de la ruleta, imprimiendo por consola el número de esa
// iteración. Pero en el caso del número que sea el ganador, imprimir por consola
// “Numero ganador:” seguido del número.


const finalRuleta = 25;
const sorteo= Math.round(Math.random()*finalRuleta);

function tirarRuleta(num){
    for(i=1; i<=finalRuleta; i++){
        let mje= "El numero de iteracion es: "+i;
        if(num === i){
            mje="El numero ganador es: "+i;
           }
           console.log(mje);
        }
}
tirarRuleta(finalRuleta);*/



























/* --------------------------------- LOTERIA -------------------------------- */
const premio0 = 100;
const premio1= 1000;
const premio2 = 10000;
const premio3 =  100000;

function resultadoLoteria() {
    let sueño = prompt('Ingrese un objeto/lugar con el que soño');

    let calcularPremio = (Math.round(Math.random() * (3 - 0) + 0));
    console.log(calcularPremio);

    if(calcularPremio == 0){
        alert('Ganaste $'+premio0);
    }else if(calcularPremio == 1){
        alert('Ganaste $'+premio1);
    }else if(calcularPremio == 2){
        alert('Ganaste $'+premio2);
    }else{
        alert('Ganaste $'+premio3);
    }

    return calcularPremio;

}
resultadoLoteria();