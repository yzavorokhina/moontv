import Layout from "./Layout";
import CategoryDescription from './CategoryDescription';
import ChannelCards from './ChannelCards';
import GoToBtn from "./GoToBtn";
import { getUrlParams } from '../utils/common.js';
import SortingButtons from "./SortingButtons";
import { getElementByLang } from '../utils/langManager';

export default function CategoryPage({ db, showAll, context }) {

    const params = getUrlParams();
    console.log(params.id); // '1'

    const categoryId = +params.id;

    if (!categoryId) {
        window.location.href = 'notFound.html';
    }

    const categoryData = db.categoriesModel.findOneById(categoryId);
    const categoryLangData = db.categoriesLocalizationModel.findOneByNameAndId(context.currentLang, categoryId);
    const streamData = db.streamsModel.findOneById(categoryId);

    if (!categoryData || !streamData) {
        window.location.href = 'notFound.html';
    }

    const channelData = db.channelsModel.findOneById(streamData.channelId);
    const totalAudience = db.streamsModel.findAndSumByName("categoryId", categoryId, "audience");

    return (
        <>
            <Layout db={db} context={context} >
                <div className="category-description-container">
                    <div className="category-description" id="react-category-description">
                        <CategoryDescription categoryData={categoryData} categoryLangData={categoryLangData} channelData={channelData} totalAudience={totalAudience} context={context} />
                    </div>
                    <div className="sorting-buttons-1">
                        <button>{getElementByLang("sorting-buttons-1-1", context.currentLang) || "Онлайн"}</button>
                        <button>{getElementByLang("sorting-buttons-1-2", context.currentLang) || "Видео"}</button>
                        <button>{getElementByLang("sorting-buttons-1-3", context.currentLang) || "Клипы"}</button>
                    </div>
                    <div className="sorting-buttons-2">
                        <div className="block-buttons-1">
                            <div className="category-search-by-language">
                                <label htmlFor="search-by-language" className="visually-hidden">{getElementByLang("category-search-by-language-label", context.currentLang) || "aЯзык"}</label>
                                <input type="search" id="language-search" className="search-by-language"
                                    placeholder={getElementByLang("category-search-by-language-label", context.currentLang) || "Язык"} aria-label="Search" />
                            </div>
                            <div className="category-search-by-tag">
                                <label htmlFor="search-by-tag" className="visually-hidden">{getElementByLang("category-search-by-tag-label", context.currentLang) || "Искать по тегам"}</label>
                                <input type="search" id="tag-search" className="search-by-tag"
                                    placeholder={getElementByLang("category-search-by-tag-label", context.currentLang) || "Искать по тегам"} aria-label="Search" />
                            </div>
                        </div>
                        <div className="block-buttons-2">
                            <SortingButtons context={context} />
                        </div>
                    </div>
                    <div className="current-language-and-tag">
                        <div className="category-languages-row" role="group" aria-label="category-tags-group">
                            <span>{getElementByLang("sort-by-category-languages-row", context.currentLang) || "Язык каналов:"}</span>
                            <span className="category-current-language">All</span>
                        </div>
                        <div className="category-tags-row" role="group" aria-label="category-tags-group">
                            <span>{getElementByLang("sort-by-category-tags-row", context.currentLang) || "Теги каналов:"}</span>
                            <span className="category-current-tag">All</span>
                        </div>
                    </div>
                </div>
                <div className="favourite-categories">
                    <div className="one-category-container">
                        <div className="channels-row" id="category_cards">
                            <ChannelCards db={db} categoryId={categoryId} showAll={showAll} context={context} />
                        </div>
                    </div>
                </div>
                <GoToBtn context={context} />
            </Layout>
        </>
    )
}