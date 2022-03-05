//promesas

import getHeroeByID from './bases/08-import';

/* const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeByID(2);
        resolve(heroe);
    }, 2000);
});
    promesa.then( (heroe) => {
        console.log('Heroe', heroe)
        }) */
const getHeroeByIDAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeByID(id);
            if(p1){
                resolve(p1);
            }else{
                reject( 'No existe el heroe en el array');
            }
        }, 2000);
    });  

}
        
getHeroeByIDAsync(1)
    .then( console.log )
    .catch( console.warn )