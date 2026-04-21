// === ДАННЫЕ ===

// Приложение 1: Антропометрические данные
const anthropometricData = [
  { param: 'Рост (высота человека)', M: 176.8, Me: 177.0, Mo: 195.0, sigma: 9.5, p5: 161.3, p95: 190.7 },
  { param: 'Высота уровня глаз', M: 166.3, Me: 165.5, Mo: 183.0, sigma: 9.1, p5: 151.4, p95: 179.6 },
  { param: 'Высота плечевого сустава', M: 148.2, Me: 151.0, Mo: 151.0, sigma: 8.1, p5: 133.8, p95: 159.2 },
  { param: 'Высота локтя', M: 108.9, Me: 109.0, Mo: 117.0, sigma: 6.2, p5: 98.9, p95: 117.8 },
  { param: 'Глубина грудной клетки стоя', M: 21.9, Me: 21.5, Mo: 21.5, sigma: 1.9, p5: 19.1, p95: 24.9 },
  { param: 'Ширина грудной клетки стоя', M: 31.6, Me: 31.4, Mo: 34.0, sigma: 3.9, p5: 26.1, p95: 38.5 },
  { param: 'Высота сидя (прямо)', M: 89.0, Me: 86.5, Mo: 86.0, sigma: 4.9, p5: 84.4, p95: 97.5 },
  { param: 'Высота уровня глаз сидя', M: 78.9, Me: 77.0, Mo: 77.0, sigma: 5.1, p5: 74.3, p95: 87.8 },
  { param: 'Высота шейной точки сидя', M: 69.9, Me: 67.0, Mo: 67.0, sigma: 6.0, p5: 62.5, p95: 80.6 },
  { param: 'Высота плечевого сустава сидя', M: 59.4, Me: 59.0, Mo: 62.0, sigma: 4.3, p5: 55.2, p95: 68.0 },
  { param: 'Расстояние «локоть – запястье»', M: 28.6, Me: 29.0, Mo: 31.0, sigma: 3.5, p5: 24.2, p95: 33.5 },
  { param: 'Ширина «локоть – локоть»', M: 44.0, Me: 42.0, Mo: 42.0, sigma: 5.0, p5: 36.9, p95: 53.3 },
  { param: 'Длина кисти руки', M: 17.8, Me: 18.0, Mo: 19.0, sigma: 1.4, p5: 16.0, p95: 19.8 },
  { param: 'Длина ладони', M: 10.0, Me: 10.0, Mo: 11.0, sigma: 1.1, p5: 8.5, p95: 11.9 },
  { param: 'Ширина кисти (пястные кости)', M: 8.4, Me: 8.8, Mo: 9.0, sigma: 0.9, p5: 6.9, p95: 9.6 },
  { param: 'Глубина головы', M: 18.9, Me: 19.0, Mo: 20.0, sigma: 1.6, p5: 15.6, p95: 21.3 },
  { param: 'Ширина головы', M: 16.1, Me: 16.5, Mo: 17.0, sigma: 1.2, p5: 14.5, p95: 18.3 },
  { param: 'Протягивание кисти вперёд', M: 74.0, Me: 74.0, Mo: 80.0, sigma: 7.3, p5: 60.6, p95: 85.1 },
  { param: 'Длина «предплечье – пальцы»', M: 47.6, Me: 48.4, Mo: 49.0, sigma: 5.0, p5: 40.0, p95: 56.3 },
  { param: 'Длина бедра', M: 58.0, Me: 60.0, Mo: 60.0, sigma: 5.6, p5: 50.3, p95: 66.4 }
];


// Приложение 4: Сравнение с ГОСТ
const comparisonWithGOST = [
  { param: 'Рост', groupMedian: 177.0, gostMedian: 176.0, deviation: +1.0 },
  { param: 'Высота уровня глаз', groupMedian: 165.5, gostMedian: 164.5, deviation: +1.0 },
  { param: 'Высота плечевого сустава', groupMedian: 151.0, gostMedian: 149.0, deviation: +2.0 },
  { param: 'Высота локтя', groupMedian: 109.0, gostMedian: 108.0, deviation: +1.0 },
  { param: 'Глубина грудной клетки', groupMedian: 21.5, gostMedian: 22.0, deviation: -0.5 },
  { param: 'Ширина грудной клетки', groupMedian: 31.4, gostMedian: 32.0, deviation: -0.6 },
  { param: 'Высота сидя', groupMedian: 86.5, gostMedian: 90.0, deviation: -3.5 },
  { param: 'Высота уровня глаз сидя', groupMedian: 77.0, gostMedian: 79.0, deviation: -2.0 },
  { param: 'Длина кисти', groupMedian: 18.0, gostMedian: 18.5, deviation: -0.5 },
  { param: 'Ширина кисти', groupMedian: 8.8, gostMedian: 8.7, deviation: +0.1 }
];


// Приложение 5: Зоны моторного поля
const motorZones = [
  { zone: 'I — Оптимальная зона', boundaries: 'Дуга предплечья', purpose: 'Важные и частые органы управления', examples: ['Клавиатура', 'Мышь'] },
  { zone: 'II — Зона лёгкой досягаемости', boundaries: 'Дуга вытянутой руки', purpose: 'Органы средней важности', examples: ['USB‑порты', 'Регулятор громкости'] },
  { zone: 'III — Зона досягаемости', boundaries: 'Дуга с наклоном корпуса', purpose: 'Редкие элементы', examples: ['Принтер', 'Сканер'] }
];

// Приложение 6: Анализ положений оператора
const postureAnalysis = [
  {position: 1,assessment: 'Правильное',issues: null,corrections: null},
  {
    position: 2,
    assessment: 'Неправильное',
    issues: 'Спина согнута, шея вытянута вперёд',
    corrections: 'Установить подставку для ног, поднять монитор до уровня глаз'
  },
  {
    position: 3,
    assessment: 'Неправильное',
    issues: 'Неестественный изгиб поясницы, руки подняты выше уровня стола',
    corrections: 'Отрегулировать высоту кресла и стола, использовать подлокотники, проверить расположение монитора'
  },
  {
    position: 4,
    assessment: 'Правильное',
    issues: null,
    corrections: 'Спина прямая с опорой на спинку, угол в коленях 90°, стопы на полу, запястья прямые',
  },
  {
    position: 5,
    assessment: 'Неправильное',
    issues: 'Глубокий наклон корпуса вперёд, шея вытянута, ноги скрещены, руки без опоры',
    corrections: 'Использовать подставку для документов; отрегулировать наклон спинки вперёд; ноги поставить на подставку; подвести кресло ближе к столу'
  }
];


// Приложение 10: Органы управления
const controlDevices = [
  {
    device: 'Клавиатура',
    location: 'Оптимальная зона (центр, перед оператором)',
    frequency: 'Часто (постоянно)',
    zone: 'I',
    standard: 'ГОСТ 12.2.033-78'
  },
  {
    device: 'Мышь',
    location: 'Оптимальная зона (справа от клавиатуры)',
    frequency: 'Часто (постоянно)',
    zone: 'I',
    standard: 'ГОСТ 12.2.033-78'
  },
  {
    device: 'Кнопка включения ПК',
    location: 'Зона лёгкой досягаемости (передняя панель системного блока)',
    frequency: 'Редко (1 раз в день)',
    zone: 'II',
    standard: 'ГОСТ 12.2.033-78'
  },
  {
    device: 'Регулятор громкости',
    location: 'Зона лёгкой досягаемости (правый край стола)',
    frequency: 'Средне (несколько раз в час)',
    zone: 'II',
    standard: 'ГОСТ 12.2.033-78'
  },
  {
    device: 'USB-порты',
    location: 'Зона лёгкой досягаемости (передняя или боковая панель)',
    frequency: 'Средне (подключение флешек)',
    zone: 'II',
    standard: 'ГОСТ 12.2.033-78'
  },
  {
    device: 'Привод CD/DVD',
    location: 'Зона досягаемости (передняя панель системного блока)',
    frequency: 'Редко',
    zone: 'III',
    standard: 'ГОСТ 12.2.033-78'
  },
  {
    device: 'Кнопка перезагрузки',
    location: 'Зона досягаемости (задняя панель системного блока)',
    frequency: 'Очень редко (при зависании)',
    zone: 'III',
    standard: 'ГОСТ 12.2.033-78'
  },
  {
    device: 'Трекбол/графический планшет',
    location: 'Оптимальная зона (справа или слева)',
    frequency: 'Часто (для дизайнеров)',
    zone: 'I',
    standard: 'ГОСТ 12.2.033-78'
  },
  {
    device: 'Цифровая клавиатура (блок)',
    location: 'Зона лёгкой досягаемости (правый край)',
    frequency: 'Средне',
    zone: 'II',
    standard: 'ГОСТ 12.2.033-78'
  },
  {
    device: 'Кнопка регулировки яркости монитора',
    location: 'Зона лёгкой досягаемости (нижняя панель монитора)',
    frequency: 'Редко',
    zone: 'II',
    standard: 'ГОСТ 12.2.033-78'
  }
];


// Приложение 11: Классификация захватов
const gripTypes = [
  // 11.1. По способу взаимодействия с рукой
  {
    category: 'По способу взаимодействия с рукой',
    types: [
      {
        type: 'Прямой (пронированный)',
        description: 'Ладони направлены наружу, пальцы сверху предмета',
        example: 'Клавиатура, ручка, мышь (стандартно)'
      },
      {
        type: 'Обратный (супинированный)',
        description: 'Ладони направлены внутрь, пальцы снизу предмета',
        example: 'Подтягивания, подъём чемодана, некоторые ручные инструменты'
      },
      {
        type: 'Комбинированный (разнохват)',
        description: 'Одна рука — прямым хватом, другая — обратным',
        example: 'Становая тяга, перенос тяжёлых предметов'
      }
    ]
  },
  // 11.2. По открытости большого пальца
  {
    category: 'По открытости большого пальца',
    types: [
      {
        type: 'Открытый',
        description: 'Большой палец отведён от ладони, участвует в удержании предмета',
        example: 'Удержание стакана, ручки, мыши'
      },
      {
        type: 'Закрытый',
        description: 'Большой палец прижат к ладони или смыкается с остальными',
        example: 'Сжатый кулак, удержание молотка'
      }
    ]
  },
  // 11.3. Сложные захваты неполной кистью
  {
    category: 'Сложные захваты неполной кистью',
    types: [
      {
        type: 'Ладонный (палмарный)',
        description: 'Предмет удерживается всей ладонью без полного обхвата пальцами',
        example: 'Удержание книги, планшета, плоской панели'
      },
      {
        type: 'Промежуточный (концевой)',
        description: 'Предмет удерживается только кончиками пальцев (обычно большим и указательным)',
        example: 'Захват иглы, мелкой детали, подъём монеты'
      }
    ]
  }
];

// === ФУНКЦИИ АНАЛИЗА ===


function analyzeVariability(data) {
  const highVariability = data.filter(item => item.sigma > 5);
  const lowVariability = data.filter(item => item.sigma < 5);
  return { high: highVariability, low: lowVariability };
}

function generatePercentileCurves(data) {
  return data.map(item => ({
    param: item.param,
    curves: {
      p5: item.p5,
      p25: (item.p5 + item.Me) / 2,
      p50: item.Me,
      p75: (item.Me + item.p95) / 2,
      p95: item.p95
    }
  }));
}

// === ВИЗУАЛИЗАЦИЯ (D3.js) ===

function createTable(data, containerId) {
  const container = document.getElementById(containerId);

  // Проверяем существование контейнера
  if (!container) {
    console.error(`Ошибка: контейнер с ID "${containerId}" не найден в DOM.`);
    return;
  }

  let tableHTML = '<table class="data-table" border="1"><thead class="table-head"><tr>';

  // Заголовки
  Object.keys(data[0]).forEach(key => {
    tableHTML += `<th class="table-header">${key}</th>`;
  });
  tableHTML += '</tr></thead><tbody class="table-body">';

  // Строки данных
  data.forEach(row => {
    tableHTML += '<tr class="table-row">';
    Object.values(row).forEach(value => {
      tableHTML += `<td class="table-cell">${value}</td>`;
    });
    tableHTML += '</tr>';
  });
  tableHTML += '</tbody></table>';

  container.innerHTML = tableHTML;
}
function createTable11(data, containerId) {
  // Получаем контейнер по ID
  const container = document.getElementById(containerId);

  // Проверяем существование контейнера
  if (!container) {
    console.error(`Ошибка: контейнер с ID "${containerId}" не найден в DOM.`);
    return;
  }

  // Буфер для накопления HTML-кода
  let htmlOutput = '';

  // Проходим по каждой категории захватов (11.1, 11.2, 11.3)
  data.forEach(category => {
    // Добавляем заголовок категории (h3)
    htmlOutput += `<h3 class="category-title">${category.category || 'Без названия категории'}</h3>`;

    // Начинаем формирование таблицы с классом
    htmlOutput += '<table class="category-table" border="1" style="margin: 15px 0; border-collapse: collapse; width: 100%;">';

    // Секция заголовков таблицы (thead)
    htmlOutput += '<thead class="table-head"><tr class="header-row" style="background-color: #f0f0f0;">';

    // Проверяем наличие данных в категории
    if (category.types && Array.isArray(category.types) && category.types.length > 0) {
      // Берём первый элемент массива types для получения названий колонок
      const firstItem = category.types[0];
      const columnNames = Object.keys(firstItem);

      // Генерируем заголовки таблицы из ключей первого объекта
      columnNames.forEach(key => {
        htmlOutput += `<th class="table-header" style="padding: 10px; border: 1px solid #ddd; text-align: left;">${key}</th>`;
      });
    } else {
      // Заглушка на случай отсутствия данных
      htmlOutput += `
        <th class="table-header" style="padding: 10px; border: 1px solid #ddd;">Тип захвата</th>
        <th class="table-header" style="padding: 10px; border: 1px solid #ddd;">Описание</th>
        <th class="table-header" style="padding: 10px; border: 1px solid #ddd;">Пример использования</th>
      `;
    }

    htmlOutput += '</tr></thead><tbody class="table-body">';

    // Заполняем строки таблицы данными
    if (category.types && Array.isArray(category.types)) {
      category.types.forEach(row => {
        htmlOutput += '<tr class="table-row">';
        Object.values(row).forEach(value => {
          htmlOutput += `<td class="table-cell" style="padding: 8px; border: 1px solid #ddd;">${value}</td>`;
        });
        htmlOutput += '</tr>';
      });
    }

    // Закрываем таблицу и добавляем отступ перед следующей
    htmlOutput += '</tbody></table><br>';
  });

  // Вставляем весь сгенерированный HTML в контейнер
  container.innerHTML = htmlOutput;
}



function visualizeMotorZones(zones) {
  // Здесь можно добавить код для отрисовки схемы моторного поля с помощью D3.js
  console.log('Визуализация зон моторного поля:', zones);
}

// === ЗАПУСК ОТЧЁТА ===

document.addEventListener('DOMContentLoaded', () => {
  // Создаём таблицы для каждого приложения
  createTable(anthropometricData, 'app1-table');
  createTable(comparisonWithGOST, 'app4-table');
  createTable(motorZones, 'app5-table');
  createTable(postureAnalysis, 'app6-table');
  createTable(controlDevices, 'app10-table');
  createTable11(gripTypes, 'app11-table');

  // Анализ разброса параметров
  const variability = analyzeVariability(anthropometricData);
  console.log('Параметры с высоким разбросом:', variability.high);
  console.log('Параметры с низким разбросом:', variability.low);

  // Построение перцентильных кривых
  const percentileCurves = generatePercentileCurves(anthropometricData);
  console.log('Перцентильные кривые:', percentileCurves);

  // Визуализация зон моторного поля
  visualizeMotorZones(motorZones);
});

