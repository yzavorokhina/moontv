

export default function SearchForm({ currentTheme }) {

    return (
        <>
            <div className="search" id="search-form-block">
                <form action="./search.html" id="searchForm" method="get">
                    <label htmlFor="site-search" className="visually-hidden">Поиск по сайту</label>
                    <input type="search" name="q" id="site-search" className="input-with-icon" placeholder="Поиск" aria-label="Search" />
                    <a href="#notifications" className="notification-round-button">
                        <img src={`./images/notifications-button-${currentTheme}.svg`} className="button-icon" alt="Search" />
                    </a>
                </form>
            </div>
        </>
    )
}