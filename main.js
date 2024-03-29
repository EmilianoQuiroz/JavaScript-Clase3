//---Ciclos e iteraciones---//
/*
Los ciclos son un medio rapido y sencillo para 
hacer algo repetidamente. Para esto podemos optar
por trs estructuras: for, while y do while 
*/

//---Tipos de bloques---// 
/*
Ciclos por conteo:
repite un bloque de codigo un numero de veces
especifica. Estructura for

Ciclos condicionales: 
Repiten un bloque de codigo mientras la condicion
evalueda sea verdadera. Estructuras While y do While
*/

//Estructura for
/*
for(desde; hasta; actualizacion){
    //Lo que escriba aca se va a ejecutar
    //mientras dure el ciclo
}
El "desde" es la zona en la que se establecen 
los valores iniciales de las variables que 
controlan en ciclo

El "hasta" es el unico elemento que decide si se 
repite o se detiene el ciclo

la "actualizacion" es el nuevo valor que se
asigna despues de cada repeticion na las variables
que controlan la repeticion
*/

//---Ejemplo---//
/*
for (let i = 0; i < 10; i++){
    //Mientras "i" sea igual a cero
    //y menor a diez
    //voy a sumarle un valor a "i"
    console.log(i)
    //Imprimimos por consola
}
*/
//Generar una tabla de multiplicacion

//Pedimos al usuario que ingrese un valor
/*
let ingresarNumero = parseInt(prompt("Ingrese un numero: "))

for(i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i

    alert(`${ingresarNumero} X ${i} = ${resultado}`)
}
*/
//Pedir nombres de usuario para asignar turnos
/*
for(i = 1; i <= 20; i++){
    let nombreUsuario = prompt("Ingrese su nombre: ")

    alert(`Turno Nº ${i} nombre: ${nombreUsuario}`)
}
*/

//---Sentencia break---//
/*
Esta sentencia sirve para, bajo cierta condicion,
interrumpir el ciclo, al incluir esta sentencia
el ciclo se interrumpe como si hubiera finalizado
*/
//Elemplo
/*
for(i = 0; i <= 10; i++){
    if(i == 5){
        break;
    }
    console.log(i)
}
/*
//---Sentencia continue---//
/*
sirve para saltearse cierta condicion y seguir
con la siguiente
*/
//Elemplo
/*
for(let i = 10; i <= 10; i++){
    if(i == 5){
        continue;
    }
    console.log(i)
}
*/
//for anidados
/*
for(let i = 0; i <= 10; i = i + 2){
    for(let j = 0; j < 10; j++){
        if(j > 2 ){
            break
        }
        console.log(j)
    }
}
*/

//---Estructura While---//
/*
La estructura while permite crear bucles que se
ejecutan cero o mas veces, dependiendo de la 
condicion indicada.
El funcionamiento de while se resume en: mientras
se cumpla la condicion indicada, repite las
instrucciones incluidas dentro del bucle 
*/
//Ejemplo
/*
let entrada = prompt("Ingrese un dato: ")

while(entrada != "Salir"){
    alert(`El usuario ingreso ${entrada}`)
   
    if(entrada == "hola"){
        break
    }

    entrada = prompt("Ingrese otro dato: ")
}
*/
//002221

//---Estructura Switch---//
/*
La sentencia Switch sirve para manejar de forma sencilla
multiples condiciones sobre una misma variable. Reemplaza 
en estos al if ya que mediante un Switch conseguimos
un codigo mucho mas ordenado
*/
//Estructura
/*
switch(variable){
    case "Si la variable es esto":
        "aqui ponemos el codigo que deseemos ejecutar"
        break;
    case 2:
        break;
    case 3:
        break;
    //En caso de que ninguno de los casos se cumpla...
    //opcionalmente podemos poner un codigo que se ...
    //ejecute por default, similar al else. 
    
    default:
        "codigo a ejecutar"
        break;
}
*/
//while + switch
/*
let usuarios = prompt("Ingrese su usuario: ")

while(usuarios != "Salir"){

    switch(usuarios){
        case "Ana":
        case "ana": 
            alert("Bienvenida Ana")
            break;
        case "Pepe":
        case "pepe":
            alert("Bienvenido Pepe")
            break;
        case "Luis":
        case "luis":
            alert("Bienvenido Luis")
            break;
        default:
            alert("Digite un usuario valido")
            break;
    }
    let usuarios = prompt("Digite su usuario: ")
}
*/

//---Ejercicio---//
/*
Crear un algoritmo que repia un bloque de instrucciones.
En cada repeticion es necesario efectuar una operacion o
comparacion para obtener una salida por alerta o consola. 

*/
//010054
let entrada = ""
let texto = ""


do{
    entrada = prompt("Ingrese un texto: ")
 
    texto += entrada

    if(texto != ""){
        texto += " "
    }

    console.log(texto)

}while(entrada!= "ESC")
















