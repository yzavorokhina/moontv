import React, { useState } from 'react';
import ChannelPage from './ChannelPage';
import HomePage from './HomePage';
import AuthPage from './AuthPage';
import NotFoundPage from './NotFoundPage';
import CategoryPage from './CategoryPage';
import CategoriesPage from './CategoriesPage';
import SearchPage from './SearchPage';
import { defaultTheme } from '../utils/themeManager';
import { defaultLang } from '../utils/langManager';

export default function App({ db, showAll, route }) {

    const defaultThemeValue = defaultTheme;
    const defaultLangValue = defaultLang;
    const [currentTheme, setTheme] = useState(defaultThemeValue);
    const [currentLang, setLang] = useState(defaultLangValue);
    const context = { currentTheme, setTheme, currentLang, setLang };

    const simulateSwitch = (route) => {
        switch (route) {
            case 'HomePage':
                return <HomePage db={db} context={context} />;
            case 'AuthPage':
                return <AuthPage db={db} context={context} />;
            case 'NotFoundPage':
                return <NotFoundPage db={db} context={context} />;
            case 'ChannelPage':
                return <ChannelPage db={db} context={context} />;
            case 'CategoryPage':
                return <CategoryPage db={db} showAll={showAll} context={context} />;
            case 'CategoriesPage':
                return <CategoriesPage db={db} context={context} />;
            case 'SearchPage':
                return <SearchPage db={db} context={context} />;
            default:
                return <HomePage db={db} context={context} />;
        }
    };

    return (
        <>
            <div>{simulateSwitch(route)}</div>;
        </>
    )
}