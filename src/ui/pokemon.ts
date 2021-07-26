import IMovimiento from 'src/entidades/IMovimiento.js';
import IPokemon from 'src/entidades/IPokemon.js';
import { actualizarTextoAyuda } from './general.js';

function mostrarTipos(tipos: string[]) {
  const $tipos = <HTMLDivElement>document.querySelector('#tipos');
  $tipos.innerHTML = '';

  tipos.forEach((tipo) => {
    const $tipo = document.createElement('span');
    $tipo.className = `badge ${tipo} type`;
    $tipo.textContent = tipo;
    $tipos.appendChild($tipo);
  });
}

function mostrarMovimientos(movimientos: IMovimiento[]) {
  const $movimientos = <HTMLTableElement>document.querySelector('#movimientos');

  movimientos.forEach((movimiento) => {
    const { nombre: nombreMovimiento, versiones } = movimiento;
    const $movimientoFila = document.createElement('tr');
    const $movimiento = document.createElement('th');
    $movimiento.setAttribute('scope', 'row');
    $movimiento.textContent = nombreMovimiento;
    $movimientoFila.appendChild($movimiento);

    const $versiones = document.createElement('td');

    versiones.forEach((version) => {
      const $version = document.createElement('span');
      $version.className = 'badge';
      $version.textContent = version;
      $versiones.appendChild($version);
    });

    $movimientoFila.appendChild($versiones);
    $movimientos.appendChild($movimientoFila);
  });
}

function mostrarHabilidades(habilidades: string[]) {
  const $habilidades = <HTMLDivElement>document.querySelector('#habilidades');
  $habilidades.innerHTML = '';
  habilidades.forEach((habilidad) => {
    const $habilidad = document.createElement('span');
    $habilidad.className = 'badge';
    $habilidad.textContent = habilidad;

    $habilidades.appendChild($habilidad);
  });
}

export default function mostrarPokemon(pokemon: IPokemon) {
  const {
    id,
    nombre,
    foto,
    tipos,
    habilidades,
    movimientos,
  } = pokemon;

  (<HTMLDivElement>document.querySelector('#pokemon-contenedor')).style.display = 'block';

  actualizarTextoAyuda('');

  const $imagen = <HTMLImageElement>document.querySelector('#pokemon-imagen');
  $imagen.setAttribute('src', foto);
  $imagen.setAttribute('alt', `Imagen frontal del pokemon ${nombre}`);

  (<HTMLElement>document.querySelector('#pokemon-nombre')).textContent = nombre;

  (<HTMLElement>document.querySelector('#pokemon-id')).textContent = String(id);

  mostrarTipos(tipos);
  mostrarHabilidades(habilidades);
  mostrarMovimientos(movimientos);
}