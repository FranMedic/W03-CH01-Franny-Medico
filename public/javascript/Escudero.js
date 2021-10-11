import Personajes from "./Personajes.js";
import Luchador from "./Luchador.js";

class Escudero extends Personajes {
  servidumbre;
  pelota;

  constructor(nombre, familia, edad, estado, servidumbre, pelota) {
    super(nombre, familia, edad, estado);
    this.pelota = pelota;
    this.frase = "Soy un loser";
    if (servidumbre instanceof Luchador) {
      this.servidumbre = Luchador;
    }
  }
}

export default Escudero;
