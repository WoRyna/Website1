// Отримуємо введений текст від користувача
const userInput = prompt('Введіть текст:');

// Перевіряємо, чи введено пасхалку і виводимо повідомлення на сторінці
if (userInput && userInput.toLowerCase() === 'woryn') {
    const messageElement = document.createElement('p');
    messageElement.textContent = 'Нікіта лох !!!';
    document.body.appendChild(messageElement);
}
