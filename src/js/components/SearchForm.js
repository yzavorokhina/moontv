import { getElementByLang } from '../utils/langManager';

export default function SearchForm({ currentTheme, currentLang }) {

    return (
        <>
            <div className="search" id="search-form-block">
                <form action="./search.html" id="searchForm" method="get">
                    <label htmlFor="site-search" className="visually-hidden">Поиск по сайту</label>
                    <input type="search" name="q" id="site-search" className="input-with-icon" placeholder={`${getElementByLang("searchForm", currentLang)}`} aria-label="Search" />
                    <a href="#notifications" className="notification-round-button">
                        <img src={`./images/notifications-button-${currentTheme}.svg`} fetchPriority="high" className="button-icon" alt="Включить уведомления" />
                    </a>
                </form>
            </div>
        </>
    )
}