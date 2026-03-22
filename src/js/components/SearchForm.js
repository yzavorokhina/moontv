
export default function SearchForm({}) {

    return (
        <>
            <form action="/dist/search.html" id="searchForm" method="get">
                <label for="site-search" className="visually-hidden">Поиск по сайту</label>
                <input type="search" name="q" id="site-search" className="input-with-icon" placeholder="Поиск" aria-label="Search" />
                <a href="#notifications" className="notification-round-button">
                    <img src="./images/notifications_button.svg" className="button-icon" alt="Search" width="40px"
                        height="40px" />
                </a>
            </form>
        </>
    )
}