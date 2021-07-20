import { actualizarTextoIndicePokemones, mostrarListadoPokemones } from '../listado.js';
import listadoPagina1 from '../../../cypress/fixtures/listado-pagina-1.json';

test('actualiza texto en el listado de pokemones', () => {
  document.body.innerHTML = '<div id="indice"></div>';
  actualizarTextoIndicePokemones('hola');

  expect(document.querySelector('#indice').textContent)
    .toContain('hola');
});

test('actualiza listado de pokemones', () => {
  document.body.innerHTML = '<div id="indice"></div>';
  const {
    results: pokemones,
  } = listadoPagina1;

  const funcionCallback = jest.fn();
  mostrarListadoPokemones(pokemones, funcionCallback);
  document.querySelector('#indice > a:nth-child(1)').click();

  expect(funcionCallback)
    .toBeCalled();

  expect(document.querySelectorAll('.list-group-item, .list-group-item-action').length)
    .toEqual(pokemones.length);
});
