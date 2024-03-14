const existedUserLogin = "best_user_login",
  existedUserPassword = "12345678";

const userLogin = prompt("Введите логин"),
  userPassword = prompt("Введите пароль");

if (existedUserLogin === userLogin && existedUserPassword === userPassword) {
  alert(`Welcome, ${userLogin}`);
} else {
  alert("Неверный логин и/или пароль!");
}
