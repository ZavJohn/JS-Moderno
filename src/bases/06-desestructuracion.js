//Desestructuracion

const persona ={
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const { nombre, edad, clave } = persona;

console.log (nombre);
console.log (edad);
console.log (clave);

const retornaPersona =({nombre, edad}) =>{
    console.log(nombre, edad);
};

retornaPersona( persona);

const userContext =({clave, edad}) =>{
    return {
        nombreClave: clave,
        anios: edad,
    };
};

const { nombreClave, anios } = userContext(persona);

console.log(nombreClave, anios)