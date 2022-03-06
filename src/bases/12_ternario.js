//Operador condicional ternario

const activo = true;
/*
let mensaje = '';
if (activo){
    mensaje = 'Activo';
} else {
    mensaje = 'Offline';
}*/

const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
const mensaje2 = !activo && 'Activo'
console.log(mensaje, mensaje2);