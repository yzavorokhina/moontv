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
            btnScrollBg: '#54506B',
            activeBtnBg: '#000000',
            bannerBtnBg: 'rgba(52, 49, 72, 0.2)',
            tagBtnBg: 'rgba(170, 168, 181, 0.7)',
            accentColorBg: '#FF6F3A',

            btnsHover: 'rgba(17, 9, 80, 0.5)',
            blocksHover: '#2e2b50',
            btnScrollHover: '#16122F',
            tagBtnBgHover: '#CECED6',
            accentColorHover: '#E2552D',

            fontLogo: '#FFFFFF',
            fontPrimary: '#FFFFFF',
            fontSecondary: '#CECED6',
            fontTertiary: 'rgba(170, 168, 181, 0.7)',

            categoryBgImg: 'url(images/category-bg-dark.jpg)',
            categoryBgImgTint: 'rgba(7, 1, 41, 0.5)',
            channelBgImg: 'url(images/channel-bg-dark.jpg)',
            channelBgImgTint: 'rgba(7, 1, 41, 0.5)',
        }],
        ["light", {
            mainBg: '#FFFFFF',
            promoBg: 'rgba(134, 129, 153, 0.5)',
            inputBg: 'rgba(170, 168, 181, 0.5)',
            btnBg: 'rgba(170, 168, 181, 0.5)',
            btnScrollBg: '#AAA8B5',
            activeBtnBg: '#AAA8B5',
            bannerBtnBg: 'rgba(170, 168, 181, 0.7)',
            tagBtnBg: '#CECED6',
            accentColorBg: '#FF6F3A',

            btnsHover: '#b6b4be',
            blocksHover: '#b6b4be',
            btnScrollHover: '#b6b4be',
            accentColorHover: '#E2552D',
            tagBtnBgHover: 'rgba(170, 168, 181, 0.7)',

            fontLogo: '#FF6F3A',
            fontPrimary: '#343148',
            fontSecondary: '#1C173C',
            fontTertiary: '#000000',

            categoryBgImg: 'url(images/category-bg-light.jpg)',
            categoryBgImgTint: 'rgba(255, 254, 254, 0.1)',
            channelBgImg: 'url(images/channel-bg-light.jpg)',
            channelBgImgTint: 'rgba(255, 254, 254, 0.1)',
        }]
    ]);
    const [currentTheme, setTheme] = useLocalStorage('currentTheme', 'light');
    const [currentUser, setUser] = useState('currentUser');

    const updateTheme = (themeId) => {
        const { mainBg, promoBg, inputBg, btnBg, btnScrollBg, activeBtnBg,
            bannerBtnBg, btnsHover, blocksHover, btnScrollHover,
            accentColorBg, accentColorHover, tagBtnBg, tagBtnBgHover,
            fontLogo, fontPrimary, fontSecondary, fontTertiary, categoryBgImg, channelBgImg, channelBgImgTint, categoryBgImgTint } = themesMap.get(themeId);

        setTheme(themeId);

        console.log({
            mainBg, promoBg, inputBg, btnBg, btnScrollBg, activeBtnBg,
            bannerBtnBg, btnsHover, blocksHover, btnScrollHover,
            accentColorBg, accentColorHover, tagBtnBg, tagBtnBgHover,
            fontLogo, fontPrimary, fontSecondary, fontTertiary, categoryBgImg, channelBgImg, channelBgImgTint, categoryBgImgTint
        });

        document.documentElement.style.setProperty('--theme-main-bg', mainBg);
        document.documentElement.style.setProperty('--theme-promo-bg', promoBg);
        document.documentElement.style.setProperty('--theme-input-bg', inputBg);
        document.documentElement.style.setProperty('--theme-btn-bg', btnBg);
        document.documentElement.style.setProperty('--theme-button-scroll-bg', btnScrollBg);
        document.documentElement.style.setProperty('--theme-active-btn-bg', activeBtnBg);

        document.documentElement.style.setProperty('--theme-transparent-banner-btn-bg', bannerBtnBg);
        document.documentElement.style.setProperty('--theme-btns-hover', btnsHover);
        document.documentElement.style.setProperty('--theme-blocks-hover', blocksHover);
        document.documentElement.style.setProperty('--theme-button-scroll-hover', btnScrollHover);

        document.documentElement.style.setProperty('--theme-accent-bg', accentColorBg);
        document.documentElement.style.setProperty('--theme-accent-hover', accentColorHover);

        document.documentElement.style.setProperty('--theme-tag-button', tagBtnBg);
        document.documentElement.style.setProperty('--theme-tag-button-bg-hover', tagBtnBgHover);

        document.documentElement.style.setProperty('--theme-font-logo', fontLogo);
        document.documentElement.style.setProperty('--theme-font-primary', fontPrimary);
        document.documentElement.style.setProperty('--theme-font-secondary', fontSecondary);
        document.documentElement.style.setProperty('--theme-font-tertiary', fontTertiary);

        document.documentElement.style.setProperty('--theme-category-bg-image', categoryBgImg);
        document.documentElement.style.setProperty('--theme-category-bg-image-tint', categoryBgImgTint);
        document.documentElement.style.setProperty('--theme-channel-bg-image', channelBgImg);
        document.documentElement.style.setProperty('--theme-channel-bg-image-tint', channelBgImgTint);
    }

    useEffect(() => {
        console.log({ currentTheme });
        updateTheme(currentTheme);

        const authStr = localStorage.getItem('auth');
        const auth = authStr ? JSON.parse(authStr) : {};
        setUser(auth);
        console.log({ auth });

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
        </>
    )
}