import Layout from "./Layout";
import CategoryDescription from './CategoryDescription';
import ChannelCards from './ChannelCards';
import GoToBtn from "./GoToBtn";
import { getUrlParams } from '../utils/common.js';
import SortingButtons from "./SortingButtons";

export default function CategoryPage({ db, showAll }) {

    const params = getUrlParams();
    console.log(params.id); // '1'

    const categoryId = +params.id;

    if (!categoryId) {
        window.location.href = 'notFound.html';
    }

    const categoryData = db.categoriesModel.findOneById(categoryId);
    const streamData = db.streamsModel.findOneById(categoryId);

    if (!categoryData || !streamData) {
        window.location.href = 'notFound.html';
    }

    const channelData = db.channelsModel.findOneById(streamData.channelId);
    const totalAudience = db.streamsModel.findAndSumByName("categoryId", categoryId, "audience");

    return (
        <>
            <Layout db={db}>
                <div className="category-description-container">
                    <div className="category-description" id="react-category-description">
                        <CategoryDescription categoryData={categoryData} channelData={channelData} totalAudience={totalAudience} />
                    </div>
                    <div className="sorting-buttons-1">
                        <button>Онлайн</button>
                        <button>Видео</button>
                        <button>Клипы</button>
                    </div>
                    <div className="sorting-buttons-2">
                        <div className="block-buttons-1">
                            <div className="category-search-by-language">
                                <label htmlFor="search-by-language" className="visually-hidden">Язык</label>
                                <input type="search" id="language-search" className="search-by-language"
                                    placeholder="Язык" aria-label="Search" />
                            </div>
                            <div className="category-search-by-tag">
                                <label htmlFor="search-by-tag" className="visually-hidden">Искать по тегам</label>
                                <input type="search" id="tag-search" className="search-by-tag"
                                    placeholder="Искать по тегам" aria-label="Search" />
                            </div>
                        </div>
                        <div className="block-buttons-2">
                            <SortingButtons />
                        </div>
                    </div>
                    <div className="current-language-and-tag">
                        <div className="category-languages-row" role="group" aria-label="category-tags-group">
                            <span>Язык каналов:</span> <span
                                className="category-current-language">English</span>
                        </div>
                        <div className="category-tags-row" role="group" aria-label="category-tags-group">
                            <span>Теги каналов:</span> <span className="category-current-tag">Programming</span>
                        </div>
                    </div>
                </div>
                <div className="favourite-categories">
                    <div className="one-category-container">
                        <div className="channels-row" id="category_cards">
                            <ChannelCards db={db} categoryId={categoryId} showAll={showAll} />
                        </div>
                    </div>
                </div>
                <GoToBtn />
            </Layout>
        </>
    )
}