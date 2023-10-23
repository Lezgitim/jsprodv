// class Box {
//   _age = 0;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this.name + this.age);
//   }

//   set age(value) {
//     this._age = value;
//     console.log(2022-this._age);
//   }

//   get age() {
//     return this._age;
//   }
// }

// let myBox = new Box("Оля", 14);

// console.log(myBox instanceof Box);

import { Note } from "./Note.js";

let newNote = new Note(document.getElementById("app"), "Привет");
let newNote2 = new Note(document.getElementById("app"), "Как дела");
document.getElementById("action").addEventListener("click", function () {
  let newNote2 = new Note(
    document.getElementById("app"),
    prompt("Название дела")
  );
});
