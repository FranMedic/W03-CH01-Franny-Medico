import Component from "./Component.js";

describe("When gave a Component constructor", () => {
  describe("when it recieves a section element, a class 'halp' and a p tag", () => {
    test("it should create an a p element with a class 'halp' inside de section element", () => {
      const father = document.createElement("section");
      const className = "halp";
      const son = "p";

      const elementCreado = new Component(father, className, son);
      const elementNacido = father.querySelector("p.halp");

      expect(elementNacido).not.toBeNull();
    });
  });
});
