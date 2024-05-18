  // Создаем массив с уже использованными городами
  var usedCities = [];

  // Функция для проверки, является ли город допустимым
  function isValidCity(city) {
      // Проверяем, что город не пустой и не был уже использован
      return city.trim() !== '' && !usedCities.includes(city);
  }

  // Функция для обработки ввода пользователя
  function handleInput() {
      // Получаем значение из текстового поля
      var input = document.getElementById('cityInput').value;

      // Проверяем, является ли город допустимым
      if (isValidCity(input)) {
          // Добавляем город в массив использованных городов
          usedCities.push(input);

          // Очищаем текстовое поле
          document.getElementById('cityInput').value = '';

          // Выводим сообщение с использованным городом
          document.getElementById('output').innerHTML = 'You used the city:' + input;
      } else {
          // Выводим сообщение об ошибке
          document.getElementById('output').innerHTML = 'Invalid city or already used';
      }
  }