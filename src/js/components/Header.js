import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import { useLocalStorage } from '../utils/common';
import { defaultTheme, setCurrentTheme, setNextTheme } from '../utils/themeManager';

export default function Header({ }) {

    const defaultThemeValue = defaultTheme;
    const [currentTheme, setTheme] = useState(defaultThemeValue);
    const [currentUser, setUser] = useState('currentUser');

    useEffect(() => {
        const currentThemeName = setCurrentTheme();
        setTheme(currentThemeName);

        const authStr = localStorage.getItem('auth');
        const auth = authStr ? JSON.parse(authStr) : {};
        setUser(auth);
        // console.log({ auth });
    }, []);

    const handleClick = () => {
        const currentThemeName = setNextTheme();
        setTheme(currentThemeName);
    };

    return (
        <>
            <div id="react-header" className="site-header">
                <header className="site-header">
                    <SearchForm />
                    <div className="logo-container">
                        <a href="./index.html" className="logo-img">
                            <img id="site-logo" src={`./images/logo-moon-header-${currentTheme}.png`} alt="MoonTV"
                                className="logo-icon" />
                        </a>
                        <h1 id="logo-text" className="logo-text">Moon.tv</h1>
                    </div>
                    <div className="container-menu">
                        <button className="menu-button" type="button" aria-label="Включить звук">
                            <a href="./notFound.html">
                                <img src={`./images/header-icon-music-${currentTheme}.svg`} title="mute" />
                            </a>
                        </button>

                        <button id="themeToggle" onClick={handleClick} className="menu-button" type="button" aria-label="Переключить тему оформления">
                            <img src={`./images/header-icon-theme-${currentTheme}.svg`} title="theme" />
                        </button>
                        <button className="menu-button" type="button" aria-label="Выбрать язык оформления">
                            <a href="./notFound.html">
                                <img src={`./images/header-icon-globe-${currentTheme}.svg`} title="language" />
                            </a>
                        </button>
                        <button className="menu-button" type="button" aria-label="Войти в свой аккаунт">
                            <a href="./auth.html">
                                <img src={`./images/header-icon-login-${currentTheme}.svg`} title="login" />
                            </a>
                        </button>
                        <div className="login">
                            <button className="login-button" type="button" aria-label="Войти в личный кабинет">
                                <a href="./auth.html">
                                    <img src={`./images/${currentUser.iconUrl || 'avatar-disabled-dark.svg'}`} alt="personal account" />
                                </a>
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}