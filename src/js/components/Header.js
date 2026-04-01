import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import { useLocalStorage } from '../utils/common';

export default function Header({ }) {

    const themes = ['dark', 'light'];
    const themesMap = new Map([
        ["dark", {
            mainBg: '#343148',
            promoBg: '#292640',
            inputBg: '#1C173C',
            btnBg: '#16122F',
            activeBtnBg: '#000000',

            bannerBtnBg: 'rgba(52, 49, 72, 0.2)',
            btnsHover: 'rgba(17, 9, 80, 0.5)',
            blocksHover: '#2e2b50',
            btnScrollHover: '#54506B',

            accentColor: '#FF6F3A',
            accentColorHover: '#E2552D',

            tagBtnBg: 'rgba(170, 168, 181, 0.7)',
            tagBtnBgHover: '#CECED6',

            fontLogo: '#FFFFFF',
            fontPrimary: '#FFFFFF',
            fontSecondary: '#CECED6',
            fontTertiary: 'rgba(170, 168, 181, 0.7)',
        }],
        ["light", {
            mainBg: '#FFFFFF',
            promoBg: 'rgba(170, 168, 181, 0.5)',
            inputBg: 'rgba(170, 168, 181, 0.5)',
            btnBg: 'rgba(170, 168, 181, 0.5)',
            activeBtnBg: '#AAA8B5',

            bannerBtnBg: 'rgba(170, 168, 181, 0.7)',
            btnsHover: 'rgba(170, 168, 181, 0.7)',
            blocksHover: '#AAA8B5',
            btnScrollHover: '#AAA8B5',

            accentColor: '#FF6F3A',
            accentColorHover: '#E2552D',

            tagBtnBg: '#CECED6',
            tagBtnBgHover: 'rgba(170, 168, 181, 0.7)',

            fontLogo: '#FF6F3A',
            fontPrimary: '#343148',
            fontSecondary: '#FFFFFF',
            fontTertiary: '#000000',
        }]
    ]);
    const [currentTheme, setTheme] = useLocalStorage('currentTheme', 'dark');

    const updateTheme = (themeId) => {
        const { mainBg, promoBg, inputBg, btnBg, activeBtnBg,
            bannerBtnBg, btnsHover, blocksHover, btnScrollHover,
            accentColor, accentColorHover, tagBtnBg, tagBtnBgHover,
            fontLogo, fontPrimary, fontSecondary, fontTertiary } = themesMap.get(themeId);

        setTheme(themeId);

        console.log({
            mainBg, promoBg, inputBg, btnBg, activeBtnBg,
            bannerBtnBg, btnsHover, blocksHover, btnScrollHover,
            accentColor, accentColorHover, tagBtnBg, tagBtnBgHover,
            fontLogo, fontPrimary, fontSecondary, fontTertiary
        });

        document.documentElement.style.setProperty('--theme-main-bg', mainBg);
        document.documentElement.style.setProperty('--theme-promo-bg', promoBg);
        document.documentElement.style.setProperty('--theme-input-bg', inputBg);
        document.documentElement.style.setProperty('--theme-btn-bg', btnBg);
        document.documentElement.style.setProperty('--theme-active-btn-bg', activeBtnBg);

        document.documentElement.style.setProperty('--theme-transparent-banner-btn', bannerBtnBg);
        document.documentElement.style.setProperty('--theme-btns-hover', btnsHover);
        document.documentElement.style.setProperty('--theme-blocks-hover', blocksHover);
        document.documentElement.style.setProperty('--theme-button-scroll-hover', btnScrollHover);

        document.documentElement.style.setProperty('--theme-accent', accentColor);
        document.documentElement.style.setProperty('--theme-accent-hover', accentColorHover);

        document.documentElement.style.setProperty('--theme-tag-button', tagBtnBg);
        document.documentElement.style.setProperty('--theme-tag-button-bg-hover', tagBtnBgHover);

        document.documentElement.style.setProperty('--theme-font-logo', fontLogo);
        document.documentElement.style.setProperty('--theme-font-primary', fontPrimary);
        document.documentElement.style.setProperty('--theme-font-secondary', fontSecondary);
        document.documentElement.style.setProperty('--theme-font-tertiary', fontTertiary);
    }

    useEffect(() => {
        updateTheme(currentTheme);
    }, []);

    const handleClick = () => {
        console.log('Кнопка нажата!');

        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;

        updateTheme(themes[nextIndex]);
    };

    return (
        <>
            <header className="site-header">
                <div className="search" id="search-form-block">
                    <SearchForm />
                </div>
                <div className="logo-container">
                    <a href="./index.html" className="logo-img">
                        <img id="site-logo" src={`./images/logo_moon_1_1-3-${currentTheme}.png`} style={{ width: 120 + 'px', height: 40 + 'px' }} alt="MoonTV"
                            className="logo-icon" />
                    </a>
                    <h1 id="logo-text" className="logo-text">Moon.tv</h1>
                </div>
                <div className="container-menu">
                    <button className="menu-button" type="button" aria-label="Включить звук">
                        <a href="./404.html">
                            <img src={`./images/header_icon_music-${currentTheme}.svg`} title="mute" width="26px" height="26px" />
                        </a>
                    </button>

                    <button id="themeToggle" onClick={handleClick} className="menu-button" type="button" aria-label="Переключить тему оформления">
                        <img src={`./images/header_icon_theme-${currentTheme}.svg`} title="theme" width="26px" height="26px" />
                    </button>
                    <button className="menu-button" type="button" aria-label="Выбрать язык оформления">
                        <a href="./404.html">
                            <img src={`./images/header_icon_globe-${currentTheme}.svg`} title="language" width="26px" height="26px" />
                        </a>
                    </button>
                    <button className="menu-button" type="button" aria-label="Войти в свой аккаунт">
                        <a href="./auth.html">
                            <img src={`./images/header_icon_login-${currentTheme}.svg`} title="login" width="26px" height="26px" />
                        </a>
                    </button>
                    <div className="login">
                        <button className="login-button" type="button" aria-label="Войти в личный кабинет">
                            <a href="./auth.html">
                                <img src={`./images/avatar_disabled-${currentTheme}.svg`} style={{ width: 60 + 'px', height: 60 + 'px' }}
                                    alt="personal account" />
                            </a>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}