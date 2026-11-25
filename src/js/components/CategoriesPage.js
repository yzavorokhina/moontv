import { useEffect } from 'react';
import Layout from "./Layout";
import CategoryCards from "./CategoryCards";
import GoToBtn from "./GoToBtn";
import SortingButtons from "./SortingButtons";
import { setCurrentLang, getElementByLang } from '../utils/langManager';

export default function CategoriesPage({ db, context }) {

    useEffect(() => {
        const { setLang } = context;
        const currentLangName = setCurrentLang();
        setLang(currentLangName);
    }, []);

    const pageId = 'categories';

    return (
        <>
            <Layout db={db} pageId={pageId} context={context}>
                <div className="all-categories">
                    <div className="arrow-back">
                        <a href="./index.html" className="arrowed">
                            <svg className="arrow-back-svg" width="16px" height="16px" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17 9H5.414l3.293-3.293a.999.999 0 10-1.414-1.414l-5 5a.999.999 0 000 1.414l5 5a.997.997 0 001.414 0 .999.999 0 000-1.414L5.414 11H17a1 1 0 100-2z"
                                    fill="#FF6F3A" />
                            </svg>
                            {getElementByLang("categories-page-arrow-back", context.currentLang) || "Назад"}
                        </a>
                    </div>
                    <div className="categories-container">
                        <div className="categories-titles-row">
                            <div className="categories-section-title">
                                <a href="/page" className="link-wrapper">
                                    <h2>
                                        {getElementByLang("categories-page-header", context.currentLang) || "Категории:"}
                                    </h2>
                                </a>
                            </div>
                            <SortingButtons context={context} />
                        </div>

                        <div id="react-category-cards">
                            <CategoryCards db={db} context={context}/>
                        </div>
                    </div>
                    <GoToBtn context={context} />
                </div>
            </Layout>
        </>
    )
}