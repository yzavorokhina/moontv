document.addEventListener('DOMContentLoaded', function() {
  const chatMessages = document.getElementById('chatMessages');
  const userInput = document.getElementById('userInput');
  const sendButton = document.getElementById('sendButton');

  // Функция добавления сообщения
  function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    messageDiv.innerHTML = `
      <div class="message-content">${text}</div>
      <div class="message-time">${timeString}</div>
    `;

    chatMessages.appendChild(messageDiv);
    scrollToBottom();
  }

  // Прокрутка к последнему сообщению
  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Обработка отправки сообщения
  function sendMessage() {
    const text = userInput.value.trim();
    if (text === '') return;

    // Добавляем сообщение пользователя
    addMessage(text, true);
    userInput.value = '';

    // Имитация ответа бота через 1 секунду
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      addMessage(botResponse, false);
    }, 1000);
  }

  // Простая логика ответов бота
  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('привет') || lowerMessage.includes('здравствуй')) {
      return 'Здравствуйте! Чем могу помочь?';
    } else if (lowerMessage.includes('пока') || lowerMessage.includes('до свидания')) {
      return 'До свидания! Было приятно пообщаться!';
    } else if (lowerMessage.includes('помощь')) {
      return 'Я здесь, чтобы помочь. Что вас интересует?';
    } else {
      return 'Понял вас. Давайте уточним детали...';
    }
  }

  // Обработчики событий
  sendButton.addEventListener('click', sendMessage);

  userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  // Автопрокрутка при загрузке
  scrollToBottom();
});



/* with emodji: */
// document.addEventListener('DOMContentLoaded', function() {
//   const chatMessages = document.getElementById('chatMessages');
//   const userInput = document.getElementById('userInput');
//   const sendButton = document.getElementById('sendButton');
//   const emojiToggle = document.getElementById('emojiToggle');
//   const emojiPanel = document.getElementById('emojiPanel');

//   // Функция добавления сообщения
//   function addMessage(text, isUser) {
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

//     const currentTime = new Date();
//     const hours = currentTime.getHours().toString().padStart(2, '0');
//     const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//     const timeString = `${hours}:${minutes}`;

//     // Безопасное отображение текста с эмодзи
//     const safeText = text
//       .replace(/&/g, '&amp;')
//       .replace(/</g, '&lt;')
//       .replace(/>/g, '&gt;');

//     messageDiv.innerHTML = `
//       <div class="message-content">${safeText}</div>
//       <div class="message-time">${timeString}</div>
//     `;

//     chatMessages.appendChild(messageDiv);
//     scrollToBottom();
//   }

//   // Прокрутка к последнему сообщению
//   function scrollToBottom() {
//     chatMessages.scrollTop = chatMessages.scrollHeight;
//   }

//   // Переключение видимости панели эмодзи
//   function toggleEmojiPanel() {
//     emojiPanel.classList.toggle('active');
//   }

//   // Вставка эмодзи в поле ввода
//   function insertEmoji(emoji) {
//     userInput.value += emoji;
//     userInput.focus();
//   }

//   // Обработка отправки сообщения
//   function sendMessage() {
//     const text = userInput.value.trim();
//     if (text === '') return;

//     // Добавляем сообщение пользователя
//     addMessage(text, true);
//     userInput.value = '';

//     // Скрываем панель эмодзи после отправки
//     emojiPanel.classList.remove('active');

//     // Имитация ответа бота через 1 секунду
//     setTimeout(() => {
//       const botResponse = getBotResponse(text);
//       addMessage(botResponse, false);
//     }, 1000);
//   }

//   // Простая логика ответов бота
//   function getBotResponse(userMessage) {
//     const lowerMessage = userMessage.toLowerCase();

//     if (lowerMessage.includes('привет') || lowerMessage.includes('здравствуй')) {
//       return 'Здравствуйте! Чем могу помочь? 😊';
//     } else if (lowerMessage.includes('пока') || lowerMessage.includes('до свидания')) {
//       return 'До свидания! Было приятно пообщаться! 👋';
//     } else if (lowerMessage.includes('помощь')) {
//       return 'Я здесь, чтобы помочь. Что вас интересует? 🤔';
//     } else {
//       return 'Понял вас. Давайте уточним детали... 👍';
//     }
//   }

//   // Обработчики событий
//   sendButton.addEventListener('click', sendMessage);

//   userInput.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//       sendMessage();
//     }
//   });

//   // Переключение панели эмодзи
//   emojiToggle.addEventListener('click', toggleEmojiPanel);

//   // Закрытие панели при клике вне её
//   document.addEventListener('click', function(e) {
//     if (!emojiPanel.contains(e.target) && !emojiToggle.contains(e.target)) {
//       emojiPanel.classList.remove('active');
//     }
//   });

//   // Добавление эмодзи по клику
//   emojiPanel.addEventListener('click', function(e) {
//     if (e.target.classList.contains('emoji-item')) {
//       const emoji = e.target.getAttribute('data-emoji');
//       insertEmoji(emoji);
//     }
//   });

//   // Автопрокрутка при загрузке
//   scrollToBottom();
// });
