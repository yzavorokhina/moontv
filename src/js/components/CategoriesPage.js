import Layout from "./Layout";
import CategoryCards from "./CategoryCards";
import GoToBtn from "./GoToBtn";
import Footer from "./Footer";
import SortingButtons from "./SortingButtons";

export default function CategoriesPage({ db }) {

    const pageId = 'categories';

    return (
        <>
            <Layout db={db} pageId={pageId}>
                <div className="all-categories">
                    <div className="arrow-back">
                        <a href="./index.html" className="arrowed">
                            <svg className="arrow-back-svg" width="16px" height="16px" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17 9H5.414l3.293-3.293a.999.999 0 10-1.414-1.414l-5 5a.999.999 0 000 1.414l5 5a.997.997 0 001.414 0 .999.999 0 000-1.414L5.414 11H17a1 1 0 100-2z"
                                    fill="#FF6F3A" />
                            </svg>
                            Назад
                        </a>
                    </div>
                    <div className="categories-container">
                        <div className="categories-titles-row">
                            <div className="categories-section-title">
                                <a href="/page" className="link-wrapper">
                                    <h2>
                                        Категории:
                                    </h2>
                                </a>
                            </div>
                            <SortingButtons />
                        </div>

                        <div id="react-category-cards">
                            <CategoryCards db={db} />
                        </div>
                    </div>
                    <GoToBtn />
                </div>
            </Layout>
        </>
    )
}