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

const colors = ["Red", "Green", "Blue", "Rebeccapurple", "Firebrick"];

for (const i in colors) {
  console.log(`${i} - ${colors[i]}`);
}

const dog = { breed: "Pug", age: 7, color: "Apricot" };
for (const key in dog) console.log(dog[key]);

for (const keys of Object.keys(dog)) {
  console.log(keys);
}
