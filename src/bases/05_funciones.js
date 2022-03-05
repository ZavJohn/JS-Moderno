//Funciones en JS

const saludar =function( nombre ){
    return `Hola, ${nombre}`;
};

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}; 

const saludar3 = ( nombre ) => `Hola, ${nombre}`; 

console.log( saludar( 'Goku' ));
console.log( saludar2( 'Vegeta' ));
console.log( saludar2( 'Gohan' ));

const getUser = () => ({
        uId: 'ABC123',
        username: 'ZavJohn',
    });

console.log( getUser());

const getUsuarioActivo = ( nombre ) => ({
    uId: 'ABC987',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Jonathan');
console.log(usuarioActivo);