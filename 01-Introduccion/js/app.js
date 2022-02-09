// <!-- 2ª Forma de hacer funcionar un script -->
    //alert('Hola Mundo');


// <!-- En aquí nos preguntara cual es nuestro nombre, si le ponemos el nombre, se asiganra a esa variable-->
    /*
        //Pregunta al usuario su nombre
        const nombre = prompt('¿Cuál es tu nombre?');

        // Esto nos permite seleccionar elementos del html
        // Toma el nombre que le pongamos a const + está aprendiendo JavaScript
        document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript`;
        
        //Asigna e valor hacia la variable producto para
        const producto = "Monitor 27 pulgadas";
    */

// <!-- Siempre es importante comentar el código. Comentario de una linea => //, si es un bloque grande /**/-->

/*
=====================================================================
========TAMBIÉN SE PUEDE USAR LA CONSOLA PARA ESCRIBIR CÓDIGO========
=====================================================================

// Se pueden crear variables e imprimirlas
    const hola = "Hola desde la consola";
    console.log(hola);

// También se pueden crear arreglos
    console.log([1, 2, 3, 4]);

// De la misma forma se pueden crear objetos
    let obj = { nombre: "Sharon", profesion: "Desarrolladora Multiplataforma" }
    console.log( obj );

// También se pueden imprimir resultados como tabla
    console.table([1, 2, 3, 4]);

// o mostrar algún error
    console.error("Algo salió mal");

// Limpiar la consola
    console.clear();

// O enviar advertencias
    console.warn("Eso NO esta permitido");

// También monitorear el tiempo que tarda algo en ejecutarse
    console.time('Hola'); console.warn("Eso no esta permitido"); 
    console.warn("Eso no esta permitido");
    console.warn("Eso no esta permitido");
    console.timeEnd('Hola');
    

/*JavaScript tiene una caracteristica, a diferencia de otros lenguajes 
de programación el ; al final  no es obligatorio salvo que tengas 
2 líneas de código en una misma.
// ejemplo:
    console.log('Hola')
    console.log('Mundo')

// va a funcionar, pero si tienes un código desordenado; no va a funcionar salvo que pongas ; 
console.log('Hola'); console.log('Mundo');

// Como recomendación siempre pon una instrucción por linea, no es obligatorio salvo el caso que vimos anteriormente pero va a facilitar mucho tu código
// ahora, vamos a crear una función, no te preocupes aun por funciones lo veremos más adelante

    function hola() {
    console.log('ok')
    }

// en estos casos esta función es valida y va a funcionar, pero es mejor utilizar tabs o espacios 
*/

//Obteniendo ayuda con ESLint para revisar errores de código.
// crear el archivo .eslintrc.json

// {
//     "parserOptions" : {
//         "ecmaVersion": 6
//     },
//     "rules" : {
//         "semi": ["error", "always"] // Muestra errores de código o también errores de código
//     }
// }

//Para hacer la prueba del eslint
console.log('Hola')
console.log('Mundo')
function hola() {
    console.log('ok')
    console.log('Hola')
    console.log('Mundo')
    }