import { cargarPokemon, cargarPokemones, guardarPokemon, guardarPokemones, LIMITE_POKEMONES } from '../pokemon.js';

describe('Tests del modulo storage', () => {
  test('cargarPokemon devuelve error si no se especifica un id valido', () => {
    expect(() => cargarPokemon()).toThrowError('Se necesita un identificador para cargar un pokemón');
  });

  test('cargarPokemon devuelve error si el pokemon no se encuentra en localstorage', () => {
    const id = 1;
    expect(() => cargarPokemon(id)).toThrowError('Pokemon con id 1 no encontrado');
  });

  test('cargarPokemones devuelve error si el pokemon no se encuentra en localstorage', () => {
    const offset = 0;
    expect(() => cargarPokemones(offset, LIMITE_POKEMONES)).toThrowError(`Listado de pokemones con offset ${offset} y limite ${LIMITE_POKEMONES} no encontrado`);
  });

  test('guardarPokemon devuelve error si no se especifica un id', () => {
    expect(() => guardarPokemon()).toThrowError('Se necesita un identificador y un pokemon para guardar en localStorage');
  });

  test('guardarPokemones devuelve error si no se especifica un id', () => {
    expect(() => guardarPokemones()).toThrowError('Se necesita offset, limite y pokemones');
  });
});
