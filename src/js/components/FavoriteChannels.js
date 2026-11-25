import { useEffect } from 'react';
import { getElementByLang } from '../utils/langManager';
import { setCurrentLang } from '../utils/langManager';
import FavoriteChannelsBlock from './FavoroteChannelsBlock';

export default function FavoriteChannels({ db, context }) {

    useEffect(() => {
        const { setLang } = context;
        const currentLangName = setCurrentLang();
        setLang(currentLangName);
    }, []);

    const showAll = false;

    const getCategoryName = (categoryId) => {
        const { currentLang } = context;
        const categoryLang = db.categoriesLocalizationModel.findOneByNameAndId(currentLang, categoryId);

        return categoryLang.shortName || "Error";
    }

    return (
        <>
            <div className="favourite-channels-wrapper">
                <div className="favourite-channels-titles">
                    <div className="favourite-channels-title">
                        <h2>{getElementByLang("favourite-channels-title", context.currentLang) || "Избранные каналы"}</h2>
                    </div>
                    <div className="favourite-channels-show-all">
                        <a href="#" className="arrowed">
                            {getElementByLang("favourite-channels-show-all", context.currentLang) || "Показать все"}
                            {/* <!-- License: MIT. Made by Shopify: https://github.com/Shopify/polaris --> */}
                            <svg className="show-all-arrow" width="24px" height="24px" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                                    fill="#FF6F3A" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="favourite-channels-blocks">
                    <div className="favorite-category">
                        <h4>{getCategoryName(9)}</h4>
                    </div>
                    <FavoriteChannelsBlock db={db} context={context} categoryId={9}/>

                    <div className="favorite-category">
                        <h4>{getCategoryName(1)}</h4>
                    </div>
                    <FavoriteChannelsBlock db={db} context={context} categoryId={1}/>

                    <div className="favorite-category">
                        <h4>{getCategoryName(11)}</h4>
                    </div>
                    <FavoriteChannelsBlock db={db} context={context} categoryId={11}/>

                    <div className="favorite-category">
                        <h4>{getCategoryName(17)}</h4>
                    </div>
                </div>
            </div>
        </>
    );
}