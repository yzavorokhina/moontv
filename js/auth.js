/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/auth.scss"
/*!****************************!*\
  !*** ./src/scss/auth.scss ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/scss/vendors/_bootstrap.scss"
/*!******************************************!*\
  !*** ./src/scss/vendors/_bootstrap.scss ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/scss/vendors/_normalize.scss"
/*!******************************************!*\
  !*** ./src/scss/vendors/_normalize.scss ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/auth.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_vendors_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/vendors/_bootstrap.scss */ "./src/scss/vendors/_bootstrap.scss");
/* harmony import */ var _scss_vendors_normalize_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/vendors/_normalize.scss */ "./src/scss/vendors/_normalize.scss");
/* harmony import */ var _scss_auth_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/auth.scss */ "./src/scss/auth.scss");



document.addEventListener('DOMContentLoaded', () => {
  console.log('Auth page loaded with its styles');
});
const users = [{
  username: 'admin',
  email: 'konfeta@mail.ru',
  password: '12345'
}, {
  username: 'user',
  email: 'zefir@mail.ru',
  password: 'password'
}];

// document.addEventListener('DOMContentLoaded', function() {
//   const loginForm = document.getElementById('loginForm');
//   const errorMessage = document.getElementById('message');

//   loginForm.addEventListener('submit', function(e) {
//     e.preventDefault(); // Отменяем стандартную отправку формы

//     // Получаем значения из полей
//     const formData = new FormData(this);
//     const credentials = {
//         email: formData.get('email'),
//         password: formData.get('password')
//     };

//     // Проверяем учётные данные
//     const user = users.find(u =>
//       u.email === credentials.email && u.password === credentials.password
//     );

//     if (user) {
//       // Успешная авторизация
//       errorMessage.style.display = 'none';
//       sessionStorage.setItem('authToken', 'ваш_токен_здесь');
//       alert('Авторизация успешна! Добро пожаловать, ' + user.username);
//       // В реальной системе здесь будет сохранение токена/сессии
//       // Например: localStorage.setItem('authToken', 'token');
//       // и перенаправление на главную страницу
//       window.location.href = 'index.html';
//     } else {
//       // Ошибка авторизации
//       errorMessage.textContent = 'Неверный логин или пароль';
//       errorMessage.style.display = 'block';
//     }
//   });
// });

// async function login(email, password) {
//   try {
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     });

//     const data = await response.json();

//     if (response.ok) {
//       // Сохраняем токен в sessionStorage
//       sessionStorage.setItem('authToken', data.token);
//       window.location.href = '/dashboard';
//     } else {
//       alert(data.message);
//     }
//   } catch (error) {
//     alert('Ошибка сети');
//   }
// }

document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const credentials = {
    email: formData.get('email'),
    password: formData.get('password')
  };
  try {
    const response = await fetch('http://127.0.0.1:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    const result = await response.json();
    const messageDiv = document.getElementById('message');
    if (response.ok) {
      messageDiv.style.color = 'lime';
      messageDiv.textContent = 'Успешный вход! Перенаправление...';
      // setTimeout(() => {
      //     window.location.href = '/index.html';
      // }, 1000);
    } else {
      messageDiv.style.color = 'red';
      messageDiv.textContent = result.message || 'Ошибка авторизации';
    }
  } catch (error) {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').textContent = 'Ошибка сети';
  }
});
})();

/******/ })()
;
//# sourceMappingURL=auth.js.map