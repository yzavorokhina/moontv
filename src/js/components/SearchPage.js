import GoToBtn from "./GoToBtn";
import Layout from "./Layout";
import SearchCards from './SearchCards';
import { getUrlParams } from '../utils/common';

export default function SearchPage({ db, showAll }) {

    const params = getUrlParams();
    console.log({ params }); // '1'

    const search = params.q || "";

    return (
        <>
            <Layout db={db}>
                <div className="favourite-categories">
                    <div className="favourite-categories-title">
                        <h2>Результаты поиска:</h2>
                    </div>
                    <div className="favourite-category-container">

                        <div className="channels-row" id="search_result">
                        <SearchCards db={db} search={search} showAll={showAll} />
                        </div>

                        <div className="show-all-link divider-container">
                            <div className="divider-line"></div>
                            <button className="divider-button">
                                <a href='./categories.html' className="arrowed">
                                    Показать все
                                    {/* <!-- License: MIT. Made by Shopify: https://github.com/Shopify/polaris --> */}
                                    <svg className="show-all-arrow" width="24px" height="24px" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                                            fill="#CECED6" />
                                    </svg>
                                </a>
                            </button>
                            <div className="divider-line"></div>
                        </div>
                    </div>
                    <GoToBtn />
                </div>
            </Layout>
        </>
    );
    }