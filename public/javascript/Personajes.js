class Personajes {
  nombre;
  edad;
  vivo = "true";
  serie = "juego de trono";
  frase;

  static familia = {
    targaryen: "casa Targaryen",
    lannister: "casa Lannister",
    baratheon: "casa Baratheon",
    aguasnegras: "casa Aguas Negras",
  };

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }
  comunicarse() {
    return this.frase;
  }
  morir() {
    this.estado = "muerto";
  }
}

export default Personajes;
