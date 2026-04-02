import React, { useState, useEffect } from 'react';

export default function Chat({}) {
  
  // Функция добавления сообщения
  const addMessage = (text, isUser) => {
    const chatMessages = document.getElementById('chatMessages');
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
  const scrollToBottom = () => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Обработка отправки сообщения
  const sendMessage = () => {
    const userInput = document.getElementById('userInput');
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
  const getBotResponse = (userMessage) => {
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

  const onKeyPress = () => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  useEffect(() => {
      scrollToBottom();
  }, []);

  return (
    <>
      <div className="chat-container">
          <div className="chat-header">
              <h2>Чат в прямом эфире:</h2>
              {/* <span className="online-status">Онлайн</span> */}
          </div>

          <div className="chat-messages" id="chatMessages">
              <div className="message bot-message">
                  <a href="./channel.html">
                      <img src="./images/Mask_group_ava1_1.svg" alt="channel ava" />
                  </a>
                  <div className="channel-name">orignMasteR</div>
                  <div className="message-content">Тема дня: разработка концепции игры
                      разработка концепции игры разработка концепции игры разработка
                      концепции игры</div>
                  <div className="message-time">10:00</div>
              </div>
          </div>

          <div className="chat-input">
              <button className="emoji-toggle" id="emojiToggle">😊</button>
              <input type="text" id="userInput" placeholder="Введите сообщение..." onKeyDown={onKeyPress} />
              <div className="message-buttons">
                  <button id="settingsButton">
                      {/* License: MIT. Made by Neuicons: https://github.com/neuicons/neu */}
                      <svg fill="#E2552D" width="20px" height="20px" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M12,16a4,4,0,1,0-4-4A4,4,0,0,0,12,16Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,10ZM3.5,12.877l-1,.579a2,2,0,0,0-.733,2.732l1.489,2.578A2,2,0,0,0,5.99,19.5L7,18.916a1.006,1.006,0,0,1,1.008.011.992.992,0,0,1,.495.857V21a2,2,0,0,0,2,2h3a2,2,0,0,0,2-2V19.782a1.009,1.009,0,0,1,1.5-.866l1.009.582a2,2,0,0,0,2.732-.732l1.488-2.578a2,2,0,0,0-.733-2.732l-1-.579a1.007,1.007,0,0,1-.5-.89,1,1,0,0,1,.5-.864l1-.579a2,2,0,0,0,.733-2.732L20.742,5.234A2,2,0,0,0,18.01,4.5L17,5.083a1.008,1.008,0,0,1-1.5-.867V3a2,2,0,0,0-2-2h-3a2,2,0,0,0-2,2V4.294a.854.854,0,0,1-.428.74l-.154.089a.864.864,0,0,1-.854,0L5.99,4.5a2,2,0,0,0-2.733.732L1.769,7.813A2,2,0,0,0,2.5,10.544l1,.578a1.011,1.011,0,0,1,.5.891A.994.994,0,0,1,3.5,12.877Zm1-3.487-1-.578L4.99,6.234l1.074.62a2.86,2.86,0,0,0,2.85,0l.154-.088A2.863,2.863,0,0,0,10.5,4.294V3h3V4.216a3.008,3.008,0,0,0,4.5,2.6l1.007-.582L20.5,8.812l-1,.578a3.024,3.024,0,0,0,0,5.219l1,.579h0l-1.488,2.578L18,17.184a3.008,3.008,0,0,0-4.5,2.6V21h-3V19.784a3.006,3.006,0,0,0-4.5-2.6l-1.007.582L3.5,15.188l1-.579a3.024,3.024,0,0,0,0-5.219Z" />
                      </svg>
                  </button>
                  <button id="sendButton" onClick={sendMessage}>Отправить</button>
              </div>
              {/* Emoji panel (initially hidden) */}
              <div className="emoji-panel" id="emojiPanel">
                  <div className="emoji-item" data-emoji="😊">😊</div>
                  <div className="emoji-item" data-emoji="😂">😂</div>
                  <div className="emoji-item" data-emoji="😍">😍</div>
                  <div className="emoji-item" data-emoji="👍">👍</div>
                  <div className="emoji-item" data-emoji="🤔">🤔</div>
                  <div className="emoji-item" data-emoji="🎉">🎉</div>
                  <div className="emoji-item" data-emoji="❤️">❤️</div>
                  <div className="emoji-item" data-emoji="🙏">🙏</div>
              </div>
          </div>
      </div>
    </>
  )
}
