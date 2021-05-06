let personas = [
    {
        nombre : {
            primerNombre : 'Juan',
            segundoNombre : 'Carlos',
            apellido: 'Mayo',
        },
        edad :16,
    },
    {
        nombre : {
            primerNombre : 'Guido',
            segundoNombre : '',
            apellido: 'Lo pinto',
        },
        edad : 32,
    },
    {
        nombre : {
            primerNombre : 'Valentin',
            segundoNombre : '',
            apellido: 'Gonzales',
        },
        edad :22,
    },
    {
        nombre : {
            primerNombre : 'Jose',
            segundoNombre : 'Ricardo',
            apellido: 'Laureano',
        },
        edad :27,
    }        

];
// console.log(personas);

// USANDO FOR !!!!!

// for (let i = 0; i < personas.length; i++) {

//     console.log('---------------');
    
//     console.log('a continuacion va la personas antes de modificar');
//     console.log(personas[i]);
    
//     console.log('a continuacion va la personas despues de la modificar');
    
//     personas[i] = { 
//         ...personas[i],
//         esMayordeEdad : 18,
//         hobbies:{},

//     };

//     console.log(personas[i]);
//     console.log('-----------');
// }

//UTILIZAMOS FOR PARA CAMBIAR ALGO DE OBJETO !!!!!
// for (let i = 0; i < personas.length; i++) {

//     personas[i]= {
    //         ...personas[i],
    //         esMayorDeEdad:null,
    //         hobbies:{},
    //     }
    // }
    // console.log(personas);
    
    //UTILIZAMOS FOREACH !!!!!!!!!
    
    
    //form de escribir funciones 
    //se quita la palabra function, se quita el nombre de la funcion y se agrega una flecha 
    
    // function xxxx(parametro){
    //     ...
    // }
    
    // let agregarMayoriaDeEdad= (personas)=> {
    //     persona={
    //         ...persona,
    //         esMayorDeEdad : null,
    //     };
    //     return persona;
    // }

// FOR EACH     FOR EACH    FOR EACH  !!!!!!!!!!!!!!!!!!!!1
//     personas.forEach((persona, i, personas)  => {
//     personas[i]={
//         ...persona,
//         esMayorDeEdad : null,
//     };
// }) ;

// console.log(personas);





//"""UTILIZANDO MAP """!!!!! ---> LO QUE HACE ESTO ES DEVLVERME UN NUEVO ARRAY MODIFICANDOLO 

let personasModificadas= personas.map((persona)  => {
    
    if (persona.edad >=18) {
    persona={
        ...persona,
        esMayorDeEdad: true,
    }
    } else
    persona={
        ...persona,
        esMayorDeEdad: false, 
    };

    return persona;
}) ;

//este consol log es el array modificado con map
console.log(personasModificadas);

// en este consol log es el rray viejo que no esta modificdoo
console.log(personas);