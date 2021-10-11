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

for (let i = 0; i < personajesLista.length; i++) {
  const container = document.querySelector(".app container");

  const card = document.createElement("ul");
  card.classList.add("characters-list row list-unstyled");
  container.appendChild(card);

  const elementoLista = document.createElement("li");
  elementoLista.classList.add("character col");
  card.appendChild(elementoLista);

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card character__card");
  elementoLista.appendChild(cardDiv);

  const imagen = document.createElement("img");
  imagen.classList.add("character__picture card-img-top");
  cardDiv.appendChild(imagen);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardDiv.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("character__name card-title h4");
  cardDiv.appendChild(cardBody);
  const texth2 = personajesLista[i].nombre + "y" + personajesLista.familia;
  cardTitle.innerHTML = texth2;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("character__info");
  cardTitle.appendChild(cardInfo);

  const ulInfo = document.createElement("ul");
  ulInfo.classList.add("list-unstyled");
  cardInfo.appendChild(ulInfo);

  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);

  const iconHand = document.createElement("i");
  infoLi.appendChild(iconHand);
  const iconHand = document.createElement("i");
  infoLi.appendChild(iconHand);

  const cardOverlay = document.createElement("div");
  cardInfo.classList.add("character__overlay");
  cardTitle.appendChild(cardOverlay);

  const ulInfo = document.createElement("ul");
  ulInfo.classList.add("list-unstyled");
  cardOverlay.appendChild(ulInfo);

  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);

  const cardActions = document.createElement("div");
  cardActions.classList.add("character__actions");
  cardOverlay.appendChild(cardActions);

  const cardButton = document.createElement("button");
  cardButton.classList.add("character__action btn");
  cardActions.appendChild(cardButton);

  const cardButton = document.createElement("button");
  cardButton.classList.add("character__action btn");
  cardActions.appendChild(cardButton);

  const cardEmoji = document.createElement("i");
  cardEmoji.classList.add("emoji");
  cardDiv.appendChild(cardEmoji);

  const comunications = document.createElement("div");
  comunications.classList.add("comunications");
  body.appendChild(comunications);

  const comunicationsText = document.createElement("p");
  comunicationsText.classList.add("comunications__text display-1");
  comunications.appendChild(comunicationsText);
  const comunicationsImage = document.createElement("img");
  comunicationsImage.classList.add("comunications__text display-1");
  comunications.appendChild(comunicationsImage);
}

/*
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

/*
let itm = document.getElementsByClassName("character col");

let cln = itm[0].cloneNode(true);

const bloqueFichas = document.getElementsByClassName(
  "characters-list row list-unstyled"
);
bloqueFichas[0].appendChild(cln);
*/
