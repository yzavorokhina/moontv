import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/auth.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Auth page loaded with its styles');
});

const users = [
  { username: 'admin', email: 'konfeta@mail.ru', password: '12345' },
  { username: 'user', email: 'zefir@mail.ru', password: 'password' }
];

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

document.getElementById('loginForm').addEventListener('submit', async function(e) {
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