import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personajes from "./Personajes.js";
import Rey from "./Rey.js";

const joffrey = new Rey("Joffrey", Personajes.familia.baratheon, 17, 2);
const jaime = new Luchador(
  "Jaime",
  Personajes.familia.lannister,
  30,
  "Sword",
  7
);
const daenerys = new Luchador(
  "Daenerys",
  Personajes.familia.targaryen,
  20,
  "Dragons",
  7
);
const tyrion = new Asesor("Tyrion", Personajes.familia.lannister, 20, daenerys);
const bronn = new Escudero(
  "Bronn",
  Personajes.familia.aguasnegras,
  32,
  jaime,
  7
);

const personajesLista = [joffrey, jaime, daenerys, tyrion, bronn];
console.log(personajes);

const comunicados = personajesLista
  .filter((persona) => persona instanceof Luchador)
  .map((persona) => persona.comunicarse());

console.log(joffrey.serie);
comunicados.forEach((mensaje) => console.log(mensaje));
console.log(`Jaime vivo ? ${jaime.vivo}`);
console.log(`Tyirion vivo ? ${tyrion.vivo}`);
jaime.morir();
tyrion.morir();
console.log(`Jaime vivo ? ${jaime.vivo}`);
console.log(`Tyirion vivo ? ${tyrion.vivo}`);
