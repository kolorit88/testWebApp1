// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Расширяем приложение на весь экран
tg.expand();

// Получаем данные пользователя
const user = tg.initDataUnsafe.user;
if (user) {
    document.getElementById('user-name').textContent =
        user.first_name || 'Пользователь';
}

// Обработчик кнопки
document.getElementById('main-button').addEventListener('click', () => {
    const resultElement = document.getElementById('result');
    resultElement.classList.remove('hidden');

    // Можно отправить данные обратно в бота
    tg.sendData(JSON.stringify({action: 'button_clicked'}));

    // Закрыть WebApp через 2 секунды
    setTimeout(() => {
        tg.close();
    }, 2000);
});

// Можно добавить обработчик события закрытия
tg.onEvent('viewportChanged', () => {
    console.log('Viewport changed');
});