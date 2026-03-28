import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';

export default function Header({ }) {

    const themes = ['dark', 'light'];
    const themesMap = new Map([
        ["dark", { 
            mainBg: '#343148', 
            btnBg: '#16122F' 
        }],
        ["light", { 
            mainBg: '#e74c3c', 
            btnBg: '#f39c12' 
        }]
    ]);
    const [currentTheme, setTheme] = useState('dark');

    const handleClick = () => {
        console.log('Кнопка нажата!');
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const { mainBg, btnBg } = themesMap.get(themes[nextIndex]);

        setTheme(themes[nextIndex]);

        console.log({ mainBg, btnBg });
        document.documentElement.style.setProperty('--theme-main-background-color', mainBg);
        document.documentElement.style.setProperty('--theme-btn-background-color', btnBg);
    };

    return (
        <>
            <header className="site-header">
                <div className="search" id="search-form-block">
                    <SearchForm />
                </div>
                <div className="logo-container">
                    <a href="./index.html" className="logo-img">
                        <img src="./images/logo_moon_1_1-3.png" style={{width: 120 + 'px', height: 40 + 'px'}} alt="MoonTV"
                            className="logo-icon" />
                    </a>
                    <h1 className="logo-text">Moon.tv</h1>
                </div>
                <div className="container-menu">
                    <button className="menu-button" type="button" aria-label="Включить звук">
                        <a href="./404.html">
                            <img src="./images/header_icon_music.svg" title="mute" width="26px" height="26px" />
                        </a>
                    </button>

                    <button id="themeToggle" onClick={handleClick} className="menu-button" type="button" aria-label="Переключить тему оформления">
                        <img src="./images/header_icon_theme.svg" title="theme" width="26px" height="26px" />
                    </button>
                    <button className="menu-button" type="button" aria-label="Выбрать язык оформления">
                        <a href="./404.html">
                            <img src="./images/header_icon_globe.svg" title="language" width="26px" height="26px" />
                        </a>
                    </button>
                    <button className="menu-button" type="button" aria-label="Войти в свой аккаунт">
                        <a href="./auth.html">
                            <img src="./images/header_icon_login.svg" title="login" width="26px" height="26px" />
                        </a>
                    </button>
                    <div className="login">
                        <button className="login-button" type="button" aria-label="Войти в личный кабинет">
                            <a href="./auth.html">
                                <img src="./images/avatar_disabled.svg" style={{width: 60 + 'px', height: 60 + 'px'}}
                                    alt="personal account" />
                            </a>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}