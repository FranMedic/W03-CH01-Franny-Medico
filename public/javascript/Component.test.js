import Component from "./Component.js";

describe("When gave a Component constructor", () => {
  describe("when it recieves a ul element, a class 'halp' and a li tag", () => {
    test("it should create an a li element with a class 'character' inside de ul element", () => {
      const father = document.createElement("ul");
      const className = "character";
      const son = "li";

      const elementCreado = new Component(father, className, son);
      const elementNacido = father.querySelector("li.character");

      expect(elementNacido).not.toBeNull();
    });
  });
});
