/* const programmer = {
  name: "Loug",
  preferredLanguage: "JavaScript",
  writeCode: function () {
    return `${this.name} codes using ${this.preferredLanguage}`;
  },
}; 
console.log(programmer.writeCode());*/

/* let groceryListItem = {
  fruit: "apple",
  quantity: 4,
  display: function () {
    console.log(`There are ${this.quantity} ${this.fruit}s`);
  },
};
groceryListItem.display(); */

class Programmer {
  constructor(name, language) {
    this.name = name;
    this.language = language;
  }

  writeCode() {
    console.log(`${this.name} is a ${this.language} programmer.`);
  }
}

const coder = new Programmer("Loug", "javaScript");

coder.writeCode();
