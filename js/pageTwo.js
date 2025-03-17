export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  personInfo() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const person = new Person("Loug", 32);
console.log(person.personInfo());

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
