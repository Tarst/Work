"use strict";
//наш json
let user = `{
    "login": "Ren@mail.ru",
    "password": "1111",
    "name": "Piter",
    "surname": "Pen",
    "rating": 12748,
    "task": 328,
    "place": 168,
    "placeTwo": 1352
  }`;

//преобразование json в обьект
user = JSON.parse(user);
let place = document.getElementById("place");
place.innerText = user.placeTwo;
