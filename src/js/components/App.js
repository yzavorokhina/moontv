import ChannelPage from './ChannelPage';

export default function App({ db, categoryId, showAll }) {

    const showOnPage = 5;

    const renderCards = () => {

    }

    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to="/">Главная</Link> | <Link to="/about">О нас</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="/channel" element={<ChannelPage />} />
                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}