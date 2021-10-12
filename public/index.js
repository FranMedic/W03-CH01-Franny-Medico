function structure() {
  const container = document.querySelector(".app container");

  const card = document.createElement("ul");
  card.classList.add("characters-list row list-unstyled");
  container.appendChild(card);

  const elementoLista = document.createElement("li");
  elementoLista.classList.add("character col");
  card.appendChild(elementoLista);
  elementoLista.innerHTML = "HOLA";

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

//crear ul
//crear li
//crear div card
//crear img
//crear div body
//crear h2
//crear div info
//crear lista datos
//crear li edad
//li estado

//crear div
//crear ul
// crear li

//crear div
//button
//button
