import Personajes from "./Personajes.js";

class Luchador extends Personajes {
  arma;
  destreza;
  constructor(nombre, familia, edad, estado, arma, destreza) {
    super(nombre, familia, edad, estado);
    this.arma = arma;
    this.frase = "Primero pego y luego pregunto";
    if (destreza >= 0 && destreza <= 10) {
      this.destreza = destreza;
    } else if (destreza > 10) {
      this.destreza = 10;
    }
  }
}
export default Luchador;
