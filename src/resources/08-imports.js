import { heroes } from '../data/heroes';
// imp snippet import moduleName from 'module';
// import heroes, {owners} from '../data/heroes';

//console.log(heroes);

// By ID
export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

//console.log(getHeroeById(2));

// By owner
export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

//console.log(getHeroeByOwner('DC'));


