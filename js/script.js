let programmer = {
  name: "Loug",
  preferredLanguage: "JavaScript",
  writeCode: function () {
    return `${this.name} codes using ${this.preferredLanguage}`;
  },
};

console.log(programmer.writeCode());
