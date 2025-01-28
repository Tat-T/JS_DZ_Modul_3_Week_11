document.getElementById('username').addEventListener('input', function(event) {
    let inputField = event.target;
    let currentValue = inputField.value;
    // Удаляем все цифры из текущего значения
    let newValue = currentValue.replace(/\d/g, '');
    if (currentValue !== newValue) {
        inputField.value = newValue;
    }
});
// --------------------2--------------------------------------

document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
});

// --------------------3--------------------------------------
document.getElementById('field').addEventListener('click', function(event) {
    const field = event.currentTarget;
    const ball = document.getElementById('ball');
    const ballSize = 45; // Размер мяча 45x45 пикселей

    const fieldRect = field.getBoundingClientRect();
    const clickX = event.clientX - fieldRect.left;
    const clickY = event.clientY - fieldRect.top;

    let ballX = clickX - ballSize / 2;
    let ballY = clickY - ballSize / 2;

    // Проверка на выход за границы поля
    if (ballX < 0) ballX = 0;
    if (ballY < 0) ballY = 0;
    if (ballX > fieldRect.width - ballSize) ballX = fieldRect.width - ballSize;
    if (ballY > fieldRect.height - ballSize) ballY = fieldRect.height - ballSize;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
});

// --------------------4--------------------------------------

let i = -1;

btn.addEventListener("click", function () {
  i++;
  let lights = ["red", "#f9aa33", "green"];
  let light = document.querySelectorAll(".light");
  if (light[i - 1]) light[i - 1].style.backgroundColor = "";
  if (i == lights.length) i = 0;
  light[i].style.backgroundColor = lights[i];
});

// --------------------5--------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');
    let lastClickedIndex = null;
    
    bookList.addEventListener('click', (event) => {
        if (event.target.classList.contains('book')) {
            const books = Array.from(bookList.getElementsByClassName('book'));
            const index = books.indexOf(event.target);

            if (event.shiftKey && lastClickedIndex !== null) {
                const start = Math.min(lastClickedIndex, index);
                const end = Math.max(lastClickedIndex, index);

                for (let i = start; i <= end; i++) {
                    books[i].classList.add('selected');
                }
            } else if (event.ctrlKey) {
                event.target.classList.toggle('selected');
            } else {
                books.forEach(book => book.classList.remove('selected'));
                event.target.classList.add('selected');
            }

            lastClickedIndex = index;
        }
    });
});
// --------------------6--------------------------------------

let tooltipElem;

    document.onmouseover = function(event) {
        let target = event.target;

        // Проверяем наличие атрибута data-tooltip
        let tooltipHtml = target.dataset.tooltip;
        if (!tooltipHtml) return;

        // Создаем элемент подсказки и добавляем его в тело документа
        tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip';
        tooltipElem.innerHTML = tooltipHtml;
        document.body.append(tooltipElem);

        // Получаем координаты элемента и устанавливаем позицию подсказки
        let coords = target.getBoundingClientRect();

        let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0;

        let top = coords.top - tooltipElem.offsetHeight - 5;
        if (top < 0) {
            top = coords.top + target.offsetHeight + 5;
        }

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(event) {
        if (tooltipElem) {
            tooltipElem.remove();
            tooltipElem = null;
        }
    };