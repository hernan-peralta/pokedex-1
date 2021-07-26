function crearItemPaginador(texto: string, url = '#'): HTMLLIElement {
  const $item = document.createElement('li');
  const $link = document.createElement('a');
  $item.className = 'page-item';
  $link.className = 'page-link';
  $link.textContent = texto;
  $link.href = url;
  $link.dataset.pagina = texto;

  $item.appendChild($link);

  return $item;
}

export function manejarCambioPagina(e:MouseEvent, callbackPaginaSeleccionada = (numeroPagina: string) => {}) {
  e.preventDefault();
  const target = <HTMLAnchorElement>e.target;
  const href = target.getAttribute('href');
  const { pagina } = target.dataset;
  if (href === '#') {
    callbackPaginaSeleccionada(String(pagina));
  } else {
    callbackPaginaSeleccionada(href || '');
  }
}

export default function mostrarPaginador(
  totalPokemones: number,
  paginaActual: number,
  urlSiguiente: string,
  urlAnterior: string,
  callbackPaginaSeleccionada = () => {},
) {
  const POKEMONES_POR_PAGINA = 20;
  const $paginador = <HTMLUListElement>document.querySelector('#paginador');
  $paginador.innerHTML = '';

  const totalPaginas = Math.ceil(totalPokemones / POKEMONES_POR_PAGINA);

  const $paginaAnterior = crearItemPaginador('Anterior', urlAnterior);

  if (urlAnterior) {
    $paginaAnterior.classList.remove('disabled');
  } else {
    $paginaAnterior.classList.add('disabled');
  }
  $paginador.appendChild($paginaAnterior);

  for (let i = 0; i < totalPaginas; i += 1) {
    const numeroPagina = i + 1;
    const $pagina = crearItemPaginador(String(numeroPagina));
    if (numeroPagina === paginaActual) {
      $pagina.classList.add('active');
    }
    $paginador.appendChild($pagina);
  }

  const $paginaSiguiente = crearItemPaginador('Siguiente', urlSiguiente);
  if (urlSiguiente) {
    $paginaSiguiente.classList.remove('disabled');
  } else {
    $paginaSiguiente.classList.add('disabled');
  }
  $paginador.appendChild($paginaSiguiente);

  $paginador.onclick = (e) => {
    manejarCambioPagina(e, callbackPaginaSeleccionada);
  };
}