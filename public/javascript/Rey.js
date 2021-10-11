import Personajes from "./Personajes.js";

class Rey extends Personajes {
  anosReinado;
  constructor(nombre, familia, edad, estado, anosReinado) {
    super(nombre, familia, edad, estado);
    this.anosReinado = anosReinado;
    this.frase = "Vais a morir todos";
  }
}

export default Rey;
