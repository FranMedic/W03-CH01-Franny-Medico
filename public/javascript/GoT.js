import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personajes from "./Personajes.js";
import Rey from "./Rey.js";

import Component from "./Component.js";
import LuchadorComponente from "./LuchadorComponente.js";

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

//const joffreyCard = new ReyComponente(joffrey);
const jaimeCard = new LuchadorComponente(jaime);
const daenerysCard = new LuchadorComponente(daenerys);
//const tyrionCard = new AsesorComponente(tyrion);
//const bronnCard = new EscuderoComponente(bronn);

joffrey.image = "../img/joffrey.jpg";
jaime.image = "../img/jaime.jpg";
daenerys.image = "../img/daenerys.jpg";
tyrion.image = "../img/tyrion.jpg";
bronn.image = "../img/bronn.jpg";
