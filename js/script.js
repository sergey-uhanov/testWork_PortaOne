const btn = document.getElementById('submitButton');

btn.addEventListener('click', processInputAndPrintResult);

function processInputAndPrintResult() {
    // Отримуємо значення введеного рядка з елемента з ідентифікатором 'inputValue'
    const inputValue = document.getElementById('inputValue').value;

    // Очищаємо рядок від символів, які не є літерами
    const cleanedStr = inputValue.replace(/[^a-zA-Zа-яА-Я]+/g, " ").trim();


    // Розбиваємо очищений рядок на масив слів
    const wordsArray = cleanedStr.split(' ');


    // Отримуємо масив унікальних літер першого слова кожного рядка
    const arrUniqueLetter = getArrFirstUniqueLetter(wordsArray);


    // Отримуємо перший унікальний елемент у масиві arrUniqueLetter
    const result = getUniqueElement(arrUniqueLetter);


    if (result) {
        // Викликаємо функцію для виведення результату
        printResult(result);
    } else {
        // Виводимо повідомлення про необхідність введення тексту
        printResult('Ви не ввели текст. Будь ласка, введіть текст.');
    }
}

// Функція, яка повертає перший унікальний елемент у масиві
function getUniqueElement(array) {
    for (let i = 0; i < array.length; i++) {
        let isUnique = true;
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            return array[i];
        }
    }
}


// Функція, яка повертає масив унікальних літер першого слова кожного рядка
function getArrFirstUniqueLetter(arrWord) {
    const arrUniqueLetter = arrWord.map((word) => {
        return getUniqueElement(word);
    });
    return arrUniqueLetter;
}

// Функція для виведення результату на сторінку
function printResult(result) {
    const divForResult = document.getElementById('result');
    divForResult.innerHTML = `Результат: ${result}`;
}
