/* function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    return `${this.name} x ${this.quantity}`;
  };
}
const newItem = new GroceryItem("Oranges", 5);
console.log(newItem instanceof GroceryItem);

function calcPrice(groceryItem, price) {
  return groceryItem.quantity * price;
}

const performCalc = calcPrice;
console.log(performCalc(newItem, 0.25));
console.log(calcPrice(newItem, 0.2)); */

/* const colors = ["Red", "Green", "Blue", "Rebeccapurple", "Firebrick"];

for (const i in colors) {
  console.log(`${i} - ${colors[i]}`);
}

const dog = { breed: "Pug", age: 7, color: "Apricot" };
for (const key in dog) console.log(dog[key]);

for (const keys of Object.keys(dog)) {
  console.log(keys);
} */

/* // With Abstraction
function SayHello(name, greeting = "Hello") {
  this.name = name;
  this.greeting = greeting;

  // Public method
  this.returnHello = () => {
    return `${this.greeting}, ${this.name}`;
  };

  // Private method
  const drinksCoffee = function () {
    console.log(`${this.name} drinks coffee.`);
  }.bind(this);

  // Public method
  this.startDay = () => {
    drinksCoffee();
  };
}

const loug = new SayHello("Loug");
console.log(loug.returnHello());

const haejoon = new SayHello("Haejoon");
console.log(haejoon.returnHello());
haejoon.startDay(); */

function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;

  this.display = () => {
    console.log(`${this.name} x ${this.quantity}`);
  };
}

function GroceryList() {
  const items = []; // Private array to store items

  const calcItemQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  this.addItem = (name, quantity) => {
    const item = new GroceryItem(name, quantity);
    items.push(item);
  };

  this.displayItems = () => {
    items.forEach((item) => item.display());
  };

  this.getTotalQuantity = () => {
    return calcItemQuantity();
  };
}

const myList = new GroceryList();
myList.addItem("Bananas", 5);
myList.addItem("Apples", 3);
myList.displayItems();
