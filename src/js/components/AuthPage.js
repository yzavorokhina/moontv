export default function AuthPage() {

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const loginForm = document.getElementById('loginForm');

        const formData = new FormData(loginForm);
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
        window.location.href='./index.html';
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
                        <h1>Вход на Moon TV</h1>
                        <div className="form-floating">
                            <input type="email" name="email" placeholder="Email" required maxLength="60" />
                            {/* <span className="error">Please provide a valid email</span> */}
                        </div>
                        <div className="form-floating">
                            <input type="password" name="password" placeholder="Password" required maxLength="60" />
                            {/* <span className="error">Please provide a valid email</span> */}
                        </div>
                        <button type="submit" className="button-1">Войти</button>
                        <button type="submit" className="button-2">Создать аккаунт</button>
                        <div className="form-check">
                            <a href="#" className="forgot-password">Забыли пароль?</a>
                        </div>
                        <p className="copy">
                            &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
                            Войти через
                            &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
                        </p>
                        <button type="submit" className="button-3">
                            <div>
                                <a href="https://vk.com/username" target="_blank" rel="noopenerer noreferrer">
                                    <img src="./images/mini-icons-vk-square.svg" alt="social-button" className="vk-id-button" />
                                </a>
                            </div>
                            Войти через VK ID
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