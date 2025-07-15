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

    // Формируем данные для отправки
    const data = {
        action: 'button_clicked',
        timestamp: Date.now(),
        user_id: user?.id || null
    };

    // Отправляем данные в бота
    tg.sendData(JSON.stringify(data));

    // Добавляем небольшую задержку перед закрытием
    setTimeout(() => {
        tg.close();
    }, 300);
});

// Обработчик события закрытия (для отладки)
tg.onEvent('viewportChanged', () => {
    console.log('Viewport changed');
});

// Проверяем, что WebApp инициализирован
console.log('WebApp initialized:', tg.initDataUnsafe);