//

import heroes from '../data/heroes';

const getHeroeByID = (id) => {
    return heroes.find( ( heroe ) => heroe.id === id);
}

//console.log(getHeroeByID(2));

export const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner === owner);

//console.table(getHeroesByOwner('Marvel'));

export default getHeroeByID;