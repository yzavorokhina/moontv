import HorizontalMenuBtn from './HorizontalMenuBtn';
import { getUrlParams } from '../utils/common.js';

export default function HorizontalMenu({ db, currentTheme, pageId }) {

    const showItems = 10;
    let activeId = 0;

    const renderCards = () => {
        const params = getUrlParams();
        activeId = +params.id || 0;
        console.log({ activeId, pageId });

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
            <div id="react-horizontal-menu" className="horizontal-menu-row">
                <nav className="horizontal-menu">
                    <ul>
                        <li className={`horizontal-menu-first-button${pageId==='categories' ? '-active' : ''}`}>
                            <a href="./categories.html">
                                <img src={`./images/all-icon-for-categories-${currentTheme}.svg`} alt="Все категории" />
                                Все
                            </a>
                        </li>
                        {renderCards().map(data => (
                            <HorizontalMenuBtn key={data.id} data={data} activeId={activeId} />
                        ))}
                        <button className="horizontal-menu-scroll"
                            aria-label="Следующая категория горизонтального меню">
                            <svg className="horizontal-menu-scroll-arrow" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                                    fill="currentColor" />
                            </svg>
                        </button>
                    </ul>
                </nav>
            </div>
        </>
    )
}

