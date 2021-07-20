import mostrarPaginador, { manejarCambioPagina } from '../paginador.js';
import fixture from '../../__tests__/pokedex.fixture.js';
import listadoPagina1 from '../../../cypress/fixtures/listado-pagina-1.json';
import listadoPagina2 from '../../../cypress/fixtures/listado-pagina-2.json';
import listadoPagina49 from '../../../cypress/fixtures/listado-pagina-49.json';


test('cambio de pagina clickeando el link 5', () => {
  const funcionCallback = jest.fn();
  document.body.innerHTML = '<a class="page-link" href="#" data-pagina="5">5</a>';
  document.querySelector('.page-link').onclick = (e) => manejarCambioPagina(e, funcionCallback);
  document.querySelector('.page-link').click();

  expect(funcionCallback)
    .toHaveBeenCalledWith(5);
});


test('cambio de pagina clickeando en un link con un href distinto de #', () => {
  const funcionCallback = jest.fn();
  document.body.innerHTML = '<a class="page-link" href="hola" data-pagina="5">Sin numero</a>';
  document.querySelector('.page-link').onclick = (e) => manejarCambioPagina(e, funcionCallback);
  document.querySelector('.page-link').click();

  expect(funcionCallback)
    .toHaveBeenCalledWith('hola');
});


test('paginador en pagina 1', () => {
  document.body.innerHTML = fixture;

  const {
    count: totalPokemones,
    results: pokemones,
    next: urlSiguiente,
    previous: urlAnterior,
  } = listadoPagina1;

  const paginaActual = 1;
  const cambiarPagina = jest.fn();

  mostrarPaginador(totalPokemones, paginaActual, urlSiguiente, urlAnterior, cambiarPagina);

  // testear que desde la pagina 1 el boton anterior tenga clase disabled
  expect(document.querySelector('.disabled>a').textContent)
    .toEqual('Anterior');
});

// testear que desde la pagina 2 todos los botones estan activos
test('paginador en pagina 2', () => {
  document.body.innerHTML = fixture;

  const {
    count: totalPokemones,
    results: pokemones,
    next: urlSiguiente,
    previous: urlAnterior,
  } = listadoPagina2;

  const paginaActual = 2;
  const cambiarPagina = jest.fn();

  mostrarPaginador(totalPokemones, paginaActual, urlSiguiente, urlAnterior, cambiarPagina);

  // no tiene que haber ningun elemento con clase disabled
  expect(document.querySelector('.disabled>a'))
    .toBe(null);
});


// testear que desde la ultima pagina el boton siguiente esta con clase disabled
test('paginador en pagina 49', () => {
  document.body.innerHTML = fixture;

  const {
    count: totalPokemones,
    results: pokemones,
    next: urlSiguiente,
    previous: urlAnterior,
  } = listadoPagina49;

  const paginaActual = 49;
  const cambiarPagina = jest.fn();

  mostrarPaginador(totalPokemones, paginaActual, urlSiguiente, urlAnterior, cambiarPagina);

  expect(document.querySelector('.disabled>a').textContent)
    .toEqual('Siguiente');
});


test('click event handler del paginador', () => {
  document.body.innerHTML = fixture;

  const {
    count: totalPokemones,
    results: pokemones,
    next: urlSiguiente,
    previous: urlAnterior,
  } = listadoPagina1;

  const paginaActual = 1;
  const cambiarPagina = jest.fn();

  mostrarPaginador(totalPokemones, paginaActual, urlSiguiente, urlAnterior, cambiarPagina);
  document.querySelector('[data-pagina="5"]').click();
  // testea que se llame a la funcion manejarCambioPagina luego de hacer click en el item 5
  expect(cambiarPagina)
    .toBeCalled();
});
