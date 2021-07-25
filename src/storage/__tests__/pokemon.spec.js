import { cargarPokemon, cargarPokemones, guardarPokemon, guardarPokemones, LIMITE_POKEMONES } from '../pokemon.js';

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

describe('Tests del modulo storage', () => {
  test('cargarPokemon devuelve error si no se especifica un id valido', () => {
    expect(() => cargarPokemon()).toThrowError('Se necesita un identificador para cargar un pokemón');
  });

  test('cargarPokemon devuelve error si el pokemon no se encuentra en localstorage', () => {
    const id = 1;
    expect(() => cargarPokemon(id)).toThrowError('Pokemon con id 1 no encontrado');
  });

  test('cargarPokemon devuelve un pokemon', () => {
    localStorage.setItem('pokemon_1', '{"name": "bulbasaur"}');
    cargarPokemon(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('pokemon_1');
  });

  test('cargarPokemones devuelve error si el pokemon no se encuentra en localstorage', () => {
    const offset = 0;
    expect(() => cargarPokemones(offset, LIMITE_POKEMONES)).toThrowError(`Listado de pokemones con offset ${offset} y limite ${LIMITE_POKEMONES} no encontrado`);
  });

  test('cargarPokemones devuelve una lista de pokemones', () => {
    localStorage.setItem('pokemones_1_20', '{"pokemones": []}');
    cargarPokemones(1, LIMITE_POKEMONES);
    expect(localStorage.getItem).toHaveBeenCalledWith('pokemones_1_20');
  });

  test('guardarPokemon devuelve error si no se especifica un id', () => {
    expect(() => guardarPokemon()).toThrowError('Se necesita un identificador y un pokemon para guardar en localStorage');
  });

  test('guardarPokemon guarda un pokemon', () => {
    const pokemon = { name: 'bulbasaur' };
    guardarPokemon(1, pokemon);
    expect(localStorage.setItem).toHaveBeenCalledWith('pokemon_1', JSON.stringify(pokemon));
  });

  test('guardarPokemones devuelve error si no se especifica un id', () => {
    expect(() => guardarPokemones()).toThrowError('Se necesita offset, limite y pokemones');
  });
});
