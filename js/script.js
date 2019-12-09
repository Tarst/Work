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
let textError = document.getElementById("error");
//обработчик событие на кнопку
enterAccount.addEventListener("click", Enter);

function Enter() {
  let password = document.getElementById("input_password").value;
  let login = document.getElementById("input_login").value;
  if (login === "" || password === "") {
    textError.innerText = "Пожалуйста, заполните все поля";
  } else if (login == user.login && password == user.password) {
    location.href = "form.html";
  } else {
    textError.innerText = "Неправильный логин или пароль";
  }
}
