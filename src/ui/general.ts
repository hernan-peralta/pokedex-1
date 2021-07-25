export function actualizarTextoAyuda(texto: string) {
  const $ayuda = <HTMLParagraphElement>document.querySelector('#ayuda');
  $ayuda.textContent = texto;
}

export function mostrarTotalPokemones(totalPokemones: string) {
  (<HTMLElement>document.querySelector('#total-pokemones')).textContent = totalPokemones;
}
