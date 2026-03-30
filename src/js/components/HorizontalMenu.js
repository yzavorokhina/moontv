import HorizontalMenuBtn from './HorizontalMenuBtn';
import { getUrlParams } from '../../utils/common';

export default function HorizontalMenu({ db }) {

    const showItems = 10;
    let activeId = 0;

    const renderCards = () => {
        const params = getUrlParams();
        activeId = +params.id || 0;
        console.log({ activeId });

        let categories = db.categoriesModel.getAll();

        if (categories.length > showItems) {
            categories = categories.sort((a, b) => {
                if (a.menuOrder > b.menuOrder) {
                    return 1;
                }
                if (a.menuOrder < b.menuOrder) {
                    return -1;
                }
                return 0;
            }).slice(0, showItems);
        }

        return categories.map(category => {

            return { ...category }
        });
    }

    return (
        <>
            <nav className="hMenu">
                <ul>
                    <li className="h-menu-first-button">
                        <a href="./categories.html">
                            <img src="./images/All_icon_for_categories.svg" alt="Иконка ссылки"
                                width="11px" height="10px" />
                            Все</a>
                    </li>
                    {renderCards().map(data => (
                        <HorizontalMenuBtn key={data.id} data={data} activeId={activeId} />
                    ))}
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

