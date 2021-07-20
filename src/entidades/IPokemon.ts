import IMovimiento from "./IMovimiento";

export default interface IPokemon {
  nombre:string,
  foto: string,
  habilidades: string[],
  tipos: string[],
  movimientos: IMovimiento[],
};
