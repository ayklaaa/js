const dog = {
  name: "Чарли",
  type: "Собака",
  makeSOund() {
    return "Гав-рррр!!";
  },
  makeDomestic() {
    console.log(`
      ${this.type} по имени ${this.name} говорит ${this.makeSOund()}
    `);
    return {
      name: this.name,
      type: this.type,
      makeSOund: this.makeSOund,
      isDomastic: true,
    };
  },
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSOund() {
    return "Чик-чик-чирик!";
  },
  makeDomestic() {
    console.log(`
      ${this.type} по имени ${this.name} говорит ${this.makeSOund()}
    `);
    return {
      name: this.name,
      type: this.type,
      makeSOund: this.makeSOund,
      isDomastic: true,
    };
  },
};

dog.makeDomestic();
