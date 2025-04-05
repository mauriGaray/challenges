class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Perro extends Animal {
  constructor(name, genero, tamanio) {
    super(name, genero);
    this.tamanio = tamanio;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}

let animal = new Animal('Dog');
animal.speak(); // Output: Dog makes a noise.
console.log(animal.name);
