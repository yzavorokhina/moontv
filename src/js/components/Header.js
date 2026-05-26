import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import { useLocalStorage } from '../utils/common';
import { defaultTheme, setCurrentTheme, setNextTheme } from '../utils/themeManager';

export default function Header({ setTheme, currentTheme }) {

    const [currentUser, setUser] = useState('currentUser');

    useEffect(() => {
        const currentThemeName = setCurrentTheme();
        setTheme(currentThemeName);

        const authStr = localStorage.getItem('auth');
        const auth = authStr ? JSON.parse(authStr) : {};
        setUser(auth);
        // console.log({ auth });
    }, []);

    const changeTheme = () => {
        const currentThemeName = setNextTheme();
        setTheme(currentThemeName);
    };

    const handleClick = (url) => {
        console.log({ url });
        window.location.href = url;
    };

    return (
        <>
            <div id="react-header" className="site-header">
                <header className="site-header">
                    <SearchForm currentTheme={currentTheme} />
                    <div className="logo-container">
                        <a href="./index.html" className="logo-img">
                            <img id="site-logo" src={`./images/logo-moon-header-${currentTheme}.png`} alt="MoonTV"
                                className="logo-icon" />
                        </a>
                        <h1 id="logo-text" className="logo-text">Moon.tv</h1>
                    </div>
                    <div className="container-menu">
                        <button className="menu-button"
                            type="button"
                            aria-label="Включить звук"
                            onClick={(e) => handleClick("./notFound.html", e)}>
                                <img src={`./images/header-icon-music-${currentTheme}.svg`} title="mute" />
                        </button>
                        <button id="themeToggle"
                            className="menu-button"
                            type="button"
                            aria-label="Переключить тему оформления"
                            onClick={changeTheme}>
                            <img src={`./images/header-icon-theme-${currentTheme}.svg`} title="theme" />
                        </button>
                        <button className="menu-button"
                            type="button"
                            aria-label="Выбрать язык оформления"
                            onClick={(e) => handleClick("./notFound.html", e)}>
                            <img src={`./images/header-icon-globe-${currentTheme}.svg`} title="language" />
                        </button>
                        <button className="menu-button"
                            type="button"
                            aria-label="Войти в свой аккаунт"
                            onClick={(e) => handleClick("./auth.html", e)}>
                            <img src={`./images/header-icon-login-${currentTheme}.svg`} title="login" />
                        </button>
                        <div className="login">
                            <button className="login-button"
                                type="button"
                                aria-label="Войти в личный кабинет"
                                onClick={(e) => handleClick("./auth.html", e)}>
                                    <img src={`./images/${currentUser.iconUrl || 'avatar-disabled-dark.jpg'}`}
                                        fetchPriority="high"
                                        alt={currentUser.iconUrl ? "Аватар пользователя" : "Заглушка аватара"} />
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}