export default function HorizontalMenu({ }) {


    return (
        <>
            <nav className="hMenu">
                <ul>
                    <li className="h-menu-first-button"><a href="./categories.html">
                        <img src="./images/All_icon_for_categories.svg" alt="Иконка ссылки"
                            width="11px" height="10px" />
                        Все</a></li>
                    <li><a href="./category.html?id=1">Обучение</a></li>
                    <li><a href="./category.html?id=2">Музыка</a></li>
                    <li><a href="./category.html?id=11">ТВ и Радио</a></li>
                    <li><a href="./category.html?id=1">Разработка</a></li>
                    <li><a href="./category.html?id=5">Спорт</a></li>
                    <li><a href="./category.html?id=6">Чтение</a></li>
                    <li><a href="./category.html?id=11">Общение</a></li>
                    <li><a href="./category.html?id=8">Игры</a></li>
                    <li><a href="./category.html?id=7">Хобби</a></li>
                    <li><a href="./category.html?id=4">Другое</a></li>
                    <button className="h-menu-scroll"
                        aria-label="Следующая категория горизонтального меню">
                        <svg className="carousel-arrow" width="30px" height="30px" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                                fill="#CECED6" />
                        </svg>
                    </button>
                </ul>
            </nav>
        </>
    )
}