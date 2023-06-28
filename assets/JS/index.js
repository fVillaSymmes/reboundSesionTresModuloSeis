// 1. Crear tres variables, una con cada palabra clave: var, let, const; y construir una porción
// de código donde la ejecución tenga un error por el alcance de cada una de éstas, ya sea
// porque la definición es al interior de una función, de un bloque o fuera de ellos.

// Primero rompemos Var declarandola dentro de una función y pidiéndola afuera

// function rompamosVar() {
//     var variable = 'hola soy var'
//     console.log(variable);
// }

// console.log(variable);

// Luego rompemos const


// function rompamosConst() {
//     const constantino = 'hola soy const'
//     return constantino
// }

// console.log(rompamosConst())
// console.log(constantino);

// Luego rompemos let

// function rompamosLet() {
//     let lettuce = 'hola soy let'
//     return lettuce
// }

// console.log(rompamosLet())
// console.log(lettuce);

// 2. Crear una función utilizando el formato tradicional con la palabra clave function, y luego
// volver a escribirla utilizando la sintaxis de función de flecha, y guardando la declaración
// dentro de una variable. La función debe recibir, al menos, dos argumentos.

// let verbo = 'soy'
// let sustantivo = 'funcion'

// function funcioncilla1(verbo, sustantivo) {
//     console.log(`hola ${verbo} ${sustantivo}`);
// } 

// funcioncilla1(verbo, sustantivo)


// sustantivo = 'funcion2'

// const funcioncilla2 = (verbo, sustantivo) => {
//     console.log(`hola ${verbo} ${sustantivo}`);
// }

// funcioncilla2(verbo, sustantivo)

// 3. Crear una función similar a la del ejercicio, utilizando esta vez un objeto con
// características de algún animal, que contenga, al menos, cinco pares de llave - valor.
// Utilizar template literals para escribir un texto empleando los valores del objeto, y
// Destructuring para definir los valores del objeto dentro de la función.


const elvis = {animal: 'perro', tipo: 'mascota', nombre: 'elvis', edad: 23, peludo: true}

// const { animal, tipo, nombre, edad, peludo} = elvis

// console.log(`${nombre} es mi ${tipo}, es un ${animal}, tiene ${edad} años y es ${peludo} `);

// Tomar el objeto creado con anterioridad, y crear una copia actualizada usando el spread
// operator; actualizar dos campos, y añadir dos nuevos.

copiaDeElvis = {...elvis, numeroDeDientes: 5, obesidad: true}

// console.log(copiaDeElvis);

// Obtener las propiedades del objeto en un Array, utilizando el método Object.values(), y
// luego usar un ciclo for of para mostrar por pantalla todos los ítems del Array.

// let arrayDeElvis = Object.values(copiaDeElvis)

// for (const propiedadElvis of arrayDeElvis) {
//     console.log(propiedadElvis);
// }