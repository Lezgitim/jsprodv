"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  collection: [
    { title: "Название альбома1", artist: "Исполнитель1", year: "2015" },
    { title: "Название альбома2", artist: "Исполнитель2", year: "2020" },
    { title: "Название альбома3", artist: "Исполнитель3", year: "2019" },
    { title: "Название альбома4", artist: "Исполнитель4", year: "2018" },
    { title: "Название альбома5", artist: "Исполнитель5", year: "2017" },
    { title: "Название альбома6", artist: "Исполнитель6", year: "2016" },
  ],
};

musicCollection[Symbol.iterator] = function () {
  let index = -1;
  return {
    next() {
      index++;
      if (index <= 5) {
        return {
          value: `${musicCollection.collection[index].title} - ${musicCollection.collection[index].artist} (${musicCollection.collection[index].year})`,
          done: false,
        };
      } else {
        return { done: true };
      }
    },
  };
};

for (const i of musicCollection) {
  console.log(i);
}
