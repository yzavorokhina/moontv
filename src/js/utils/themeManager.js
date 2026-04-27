import { setLocalStorage, useLocalStorage } from './common';

export const defaultTheme = 'dark';
let currentTheme = useLocalStorage('currentTheme', 'light');

const storageKey = 'currentTheme';
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
    subscribeBtnBg: '#16122F',

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
    notFoundBgImg: 'url(images/404-background-dark.jpg)',
    notFoundBgImgTint: 'rgba(22, 18, 47, 0.8)',
    logoGlow: 'drop-shadow(1px 1px 0 rgba(244, 245, 193, 0.2))drop-shadow(-1px -1px 0 rgba(145, 145, 132, 0.2))drop-shadow(0 0 25px rgba(255, 255, 255, 0.5))',
    logoGlowHover: 'drop-shadow(1px 1px 0 rgba(244, 245, 193, 0.5))drop-shadow(-1px -1px 0 rgba(145, 145, 132, 0.5))drop-shadow(0 0 25px rgba(255, 255, 255, 0.9))',
    searchIcon: 'url(images/search-icon-dark.svg)',
    arrowDown: 'url(images/arrow-down-dark.svg)',
    followBtn: 'url(images/heart-icon-dark.svg)',
    subscribeBtn: 'url(images/subscribe-button-dark.svg)',
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
    subscribeBtnBg: '#CECED6',

    btnsHover: '#b6b4be',
    blocksHover: '#b6b4be',
    btnScrollHover: '#b6b4be',
    accentColorHover: '#E2552D',
    tagBtnBgHover: 'rgba(170, 168, 181, 0.7)',

    fontLogo: '#FF6F3A',
    fontPrimary: '#343148',
    // fontSecondary: '#1C173C',
    fontSecondary: '#343148',
    fontTertiary: '#000000',

    categoryBgImg: 'url(images/category-bg-light.jpg)',
    categoryBgImgTint: 'rgba(255, 254, 254, 0.1)',
    channelBgImg: 'url(images/channel-bg-light.jpg)',
    channelBgImgTint: 'rgba(255, 254, 254, 0.1)',
    notFoundBgImg: 'url(images/404-background-light.jpg)',
    notFoundBgImgTint: 'rgba(180, 176, 192, 0.3)',
    logoGlow: 'drop-shadow(1px 1px 0 rgba(135, 177, 250, 0.2))drop-shadow(-1px -1px 0 rgba(135, 177, 250, 0.2))drop-shadow(0 0 25px rgba(135, 177, 250, 0.5))',
    logoGlowHover: 'drop-shadow(1px 1px 0 rgba(135, 177, 250, 0.5))drop-shadow(-1px -1px 0 rgba(135, 177, 250, 0.5))drop-shadow(0 0 25px rgba(135, 177, 250, 0.9))',
    searchIcon: 'url(images/search-icon-light.svg)',
    arrowDown: 'url(images/arrow-down-light.svg)',
    followBtn: 'url(images/heart-icon-light.svg)',
    subscribeBtn: 'url(images/subscribe-button-light.svg)',
  }]
]);

export const updateTheme = (themeId) => {
  // console.log({ updateTheme: currentTheme });
  const { mainBg, promoBg, inputBg, btnBg, btnScrollBg, activeBtnBg,
    bannerBtnBg, btnsHover, blocksHover, btnScrollHover,
    accentColorBg, subscribeBtnBg, accentColorHover, tagBtnBg, tagBtnBgHover,
    fontLogo, fontPrimary, fontSecondary, fontTertiary, categoryBgImg, channelBgImg, channelBgImgTint, categoryBgImgTint, notFoundBgImg, notFoundBgImgTint, logoGlow, logoGlowHover, searchIcon, arrowDown, followBtn, subscribeBtn } = themesMap.get(themeId);

  setLocalStorage(storageKey, themeId);

  // console.log({
  //   mainBg, promoBg, inputBg, btnBg, btnScrollBg, activeBtnBg,
  //   bannerBtnBg, btnsHover, blocksHover, btnScrollHover,
  //   accentColorBg, subscribeBtnBg, accentColorHover, tagBtnBg, tagBtnBgHover,
  //   fontLogo, fontPrimary, fontSecondary, fontTertiary, categoryBgImg, channelBgImg, channelBgImgTint, categoryBgImgTint, notFoundBgImg, notFoundBgImgTint, logoGlow, logoGlowHover, searchIcon, arrowDown, followBtn, subscribeBtn });

  document.documentElement.style.setProperty('--theme-main-bg', mainBg);
  document.documentElement.style.setProperty('--theme-promo-bg', promoBg);
  document.documentElement.style.setProperty('--theme-input-bg', inputBg);
  document.documentElement.style.setProperty('--theme-btn-bg', btnBg);
  document.documentElement.style.setProperty('--theme-button-scroll-bg', btnScrollBg);
  document.documentElement.style.setProperty('--theme-active-btn-bg', activeBtnBg);
  document.documentElement.style.setProperty('--theme-subscribe-btn-bg', subscribeBtnBg);


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
  document.documentElement.style.setProperty('--theme-notFound-bg-image', notFoundBgImg);
  document.documentElement.style.setProperty('--theme-notFound-bg-image-tint', notFoundBgImgTint);

  document.documentElement.style.setProperty('--theme-logo-glow', logoGlow);
  document.documentElement.style.setProperty('--theme-logo-glow-hover', logoGlowHover);
  document.documentElement.style.setProperty('--theme-search-icon', searchIcon);
  document.documentElement.style.setProperty('--theme-arrow-down', arrowDown);
  document.documentElement.style.setProperty('--theme-follow-button', followBtn);
  document.documentElement.style.setProperty('--theme-subscribe-button', subscribeBtn);
  
  return themeId;
}

const getCurrentTheme = () => {
  return useLocalStorage(storageKey, defaultTheme);
}

export const setCurrentTheme = () => {
  const currentTheme = getCurrentTheme(defaultTheme);
  // console.log({ currentTheme });

  updateTheme(currentTheme);
  return currentTheme;
}

export const setNextTheme = () => {
  const currentTheme = getCurrentTheme();
  const currentIndex = themes.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % themes.length;

  // console.log({ currentTheme, currentIndex, nextIndex });
  return updateTheme(themes[nextIndex]);
}