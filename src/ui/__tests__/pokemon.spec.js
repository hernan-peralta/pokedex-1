import mostrarPokemon from '../pokemon.js';
import fixture from '../../__tests__/pokedex.fixture.js';
import objeto from '../../../cypress/fixtures/bulbasaur.json';
import {mapearPokemon} from '../../mapeadores/pokemon'

test('actualiza pokemon', () => {
  document.body.innerHTML = fixture;

  const pokemon = mapearPokemon(objeto)

  mostrarPokemon(pokemon);

  expect(document.querySelector(('#pokemon-imagen')).getAttribute('src'))
    .toContain(objeto.sprites.front_default);

  expect(document.querySelector(('#pokemon-imagen')).getAttribute('alt'))
    .toContain(`Imagen frontal del pokemon ${objeto.name}`);

  expect(document.querySelector(('#pokemon-nombre')).textContent)
    .toContain(objeto.name);

  expect(document.querySelector(('#pokemon-id')).textContent)
    .toContain(objeto.id);

  expect(document.querySelectorAll(('#tipos>span')).length)
    .toEqual(objeto.types.length);

  expect(document.querySelectorAll(('#habilidades>span')).length)
    .toEqual(objeto.abilities.length);

  expect(document.querySelectorAll(('#movimientos>tr')).length)
    .toEqual(objeto.moves.length);
});
