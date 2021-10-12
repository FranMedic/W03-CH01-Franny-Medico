import Personajes from "./Personajes.js";
import Luchador from "./Luchador.js";
import Rey from "./Rey.js";
import Escudero from "./Escudero.js";

class Asesor extends Personajes {
  asesorado;

  constructor(nombre, familia, edad, asesorado) {
    super(nombre, familia, edad);
    this.frase = "No sé por qué, pero creo que voy a morir pronto";
    if (
      asesorado instanceof Rey ||
      asesorado instanceof Luchador ||
      asesorado instanceof Asesor ||
      asesorado instanceof Escudero
    ) {
      this.asesorado = asesorado;
    }
  }
}

<module className="exports"></module>= {Asesor};
