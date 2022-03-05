
const  persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        CP: 52282,
        lat: 14.98672,
        lng: 35.982567,
    },
};

const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);
console.table (persona.direccion);