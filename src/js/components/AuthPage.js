import { useEffect } from 'react';
import { getElementByLang } from '../utils/langManager';
import { setCurrentLang } from '../utils/langManager';

export default function AuthPage({ context }) {

    useEffect(() => {
        const { setLang } = context;
        const currentLangName = setCurrentLang();
        setLang(currentLangName);
    }, []);

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const loginForm = document.getElementById('loginForm');

        const formData = new FormData(loginForm);
        const credentials = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        try {
            const response = await fetch('http://localhost:3000/api/login', {
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
                localStorage.setItem('auth', JSON.stringify(result));
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
    }

    const handleClick = () => {
        window.location.href = './index.html';
    }

    return (
        <>
            <div className="login-container">
                <div className="top-buttons">
                    <a href="./index.html" className="btn-back">
                        <div className="arrow-1">
                            <div></div>
                        </div>
                    </a>
                    <button type="button" onClick={handleClick} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="form">
                    <form id="loginForm" action="" method="POST" onSubmit={handleOnSubmit}>
                        <a href="./index.html" className="auth_logo mx-auto">
                            <img src="./images/logo-moon-auth-page.png" alt="bootstrap-logo" />
                        </a>
                        <h1>{getElementByLang("auth-header", context.currentLang) || "Вход на Moon TV"}</h1>
                        <div className="form-floating">
                            <input type="email" name="email" placeholder="Email" required maxLength="60" />
                            {/* <span className="error-email">Please provide a valid email</span> */}
                        </div>
                        <div className="form-floating">
                            <input type="password" name="password" placeholder="Password" required maxLength="60" />
                            {/* <span className="error-password">Please provide a valid password</span> */}
                        </div>
                        <button type="submit" className="button-1">{getElementByLang("auth-button-1", context.currentLang) || "Войти"}</button>
                        <button type="submit" className="button-2">{getElementByLang("auth-button-2", context.currentLang) || "Создать аккаунт"}</button>
                        <div className="form-check">
                            <a href="#" className="forgot-password">{getElementByLang("auth-forgot-password", context.currentLang) || "Забыли пароль?"}</a>
                        </div>
                        <p className="log-in-via">
                            &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
                            {getElementByLang("auth-log-in-via", context.currentLang) || "Войти через"}
                            &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
                        </p>
                        <button type="submit" className="button-3">
                            <div>
                                <a href="https://vk.com/username" target="_blank" rel="noopenerer noreferrer">
                                    <img src="./images/mini-icons-vk-square.svg" alt="social-button" className="vk-id-button" />
                                </a>
                            </div>
                            {getElementByLang("auth-button-3", context.currentLang) || "Войти через VK ID"}
                        </button>
                        <div className="links">
                            <a href="https://vkvideo.ru/@channel" target="_blank" rel="noopenerer noreferrer">
                                <img src="./images/icon-vk-video.png" alt="social-button" className="social-button" />
                            </a>
                            <a href="https://www.rutube.ru/channel" target="_blank" className="rutube-button" rel="noopenerer noreferrer">
                                <img src="./images/icon-rutube.png" alt="social-button" className="social-button" />
                            </a>
                            <a href="https://www.youtube.com/@channel" target="_blank" rel="noopenerer noreferrer">
                                <img src="./images/icon-youtube-live.svg" alt="social-button" className="social-button" />
                            </a>
                            <a href="https://www.youtube.com/@channel" target="_blank" rel="noopenerer noreferrer">
                                <img src="./images/icon-youtube.svg" alt="social-button" className="social-button" />
                            </a>
                            <a href="https://vkplay.ru/live/" target="_blank" rel="noopenerer noreferrer">
                                <img src="./images/icon-vk-play.png" alt="social-button" className="social-button" />
                            </a>
                        </div>
                    </form>
                    <div id="message"></div>
                </div>
            </div>
        </>
    )
}