//<form class="create-user-form">
//<label>
//Имя
//<input type="text" name="userName" placeholder="Введите ваше
//имя">
//</label>
//<label>
//Пароль
//<input type="password" name="password" placeholder="Придумайте
//Пароль">
//</label>
//<button type="submit">
//Подтвердить
//</button>
//</form>

const body = document.body; //сохраняет ссылку на элемент <body> в переменной "body".

body.innerHTML =
  //устанавливает HTML-содержимое элемента <body>заменяет текущее содержимое тела документa, заменяет существующее содержимое элемента новым содержимым
  `<form class="create-user-form">
    <label>
      Имя
      <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
      Пароль
      <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
      Подтвердить   
    </button>
  </form>
`;

const form = document.createElement("form"); //строка создает новый элемент формы
form.classList.add("create-user-form"); //добавляется класс "create-user-form" к созданной форме. Это позволит применить стили к форме через CSS
form.innerHTML = ` //устанавливает HTML-содержимое новой формы
    <label>
      Имя
      <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
      Пароль
      <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
      Подтвердить
    </button>
`;
body.append(form); // созданная форма добавляется в тело документа с помощью метода append(). Это позволяет отобразить форму на веб-странице
