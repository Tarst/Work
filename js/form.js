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

let maxRating = 15000; //максимальный рейтинг который может быть у человека
let surname = document.getElementById("surname");
let task = document.getElementById("taskDone");
let place = document.getElementById("rating");
let rating = document.getElementById("myRating");
let myRating = document.getElementsByClassName("lvlSize")[0].style;
let fix = 0;
//обработчик на кнопку что бы перейти к заданием
enter_task.addEventListener("click", Enter);
function Enter() {
  location.href = "task.html";
}
//обработчик на кнопку что бы выйти
exit.addEventListener("click", Exit);
function Exit() {
  location.href = "index.html";
}

user = JSON.parse(user);

surname.innerText = user.name + " " + user.surname;
task.innerText = user.task;
place.innerText = user.place;
rating.innerText = user.rating;
fix = Math.round((+user.rating * 100) / maxRating);
myRating.height = fix + "%"; //меняется шкала прогресса у пользователя
