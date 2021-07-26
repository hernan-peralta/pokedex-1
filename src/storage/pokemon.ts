import IPokemon from 'src/entidades/IPokemon';
import IListadoPokemones from 'src/entidades/IListadoPokemones';

export const LIMITE_POKEMONES = 20;

function obtenerKeyPokemon(id: string) {
  return `pokemon_${id}`;
}

function obtenerKeyPokemones(offset: number, limite: number) {
  return `pokemones_${offset}_${limite}`;
}

export function cargarPokemon(id: string): IPokemon {
  if (id === undefined) {
    throw new Error('Se necesita un identificador para cargar un pokemón');
  }

  const pokemon = JSON.parse(localStorage.getItem(obtenerKeyPokemon(id)) || '{}');
  if (JSON.stringify(pokemon) === '{}') {
    throw new Error(`Pokemon con id ${id} no encontrado`);
  }

  return pokemon;
}

export function cargarPokemones(offset = 0, limite = LIMITE_POKEMONES): IListadoPokemones {
  const pokemones = JSON.parse(localStorage.getItem(obtenerKeyPokemones(offset, limite)) || '{}');
  if (JSON.stringify(pokemones) === '{}') {
    throw new Error(`Listado de pokemones con offset ${offset} y limite ${limite} no encontrado`);
  }

  return pokemones;
}

export function guardarPokemon(id: string, pokemon: IPokemon) {
  if (id === undefined || typeof pokemon !== 'object') {
    throw new Error('Se necesita un identificador y un pokemon para guardar en localStorage');
  }

  localStorage.setItem(obtenerKeyPokemon(id), JSON.stringify(pokemon));
}

export function guardarPokemones(offset: number, limite: number, pokemones: IListadoPokemones) {
  if (offset === undefined || limite === undefined || typeof pokemones !== 'object') {
    throw new Error('Se necesita offset, limite y pokemones');
  }

  localStorage.setItem(obtenerKeyPokemones(offset, limite), JSON.stringify(pokemones));
}
