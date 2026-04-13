import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChannelPage from './ChannelPage';
import HomePage from './HomePage';
import AuthPage from './AuthPage';
import NotFoundPage from './NotFoundPage';
import CategoryPage from './CategoriesPage';
import CategoriesPage from './CategoriesPage';
import SearchPage from './SearchPage';

export default function App({ db }) {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage db={db} />} />
                    <Route path="/auth" element={<AuthPage db={db} />} />
                    <Route path="/404" element={<NotFoundPage db={db} />} />
                    <Route path="/channel" element={<ChannelPage db={db} />} />
                    <Route path="/category" element={<CategoryPage db={db} />} />
                    <Route path="/categories" element={<CategoriesPage db={db} />} />
                    <Route path="/search" element={<SearchPage db={db} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}