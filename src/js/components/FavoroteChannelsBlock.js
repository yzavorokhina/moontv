import { useEffect } from 'react';
import { setCurrentLang } from '../utils/langManager';

export default function FavoriteChannelsBlock({ db, context, categoryId }) {

    useEffect(() => {
        const { setLang } = context;
        const currentLangName = setCurrentLang();
        setLang(currentLangName);
    }, []);

    const showAll = false;

    const renderCards = () => {
        const { currentLang } = context;
        const showItems = 3;

        const categoryLang = db.categoriesLocalizationModel.findOneByNameAndId(currentLang, categoryId);

        
        let channels = db.channelsModel.findByValueInArray("categories", categoryId);


        if (!showAll && channels.length > showItems) {
            channels = channels.slice(0, showItems);
        }
        console.log({ FavoriteChannelsBlock: 1, channels, categoryId });

        return channels.map(channel => {
            return {
                name: channel.name,
                iconUrl: channel.iconUrl,
                id: channel.id,
                categoryName: categoryLang.name,
            }
        });
    }

    return (
        <>
            <div className="favorite-channels">
                <ul>
                    {renderCards().map(data => (
                        <li key={data.id}>
                            <div className="favorite-channel">
                                <div className="favorite-channel-ava">
                                    <a href="">
                                        <img src={data.iconUrl} alt="personal account" />
                                    </a>
                                </div>
                                <div className="stream-live-indicator">
                                    <span>&#11044;</span>
                                </div>
                                <div className="favorite-channel-info">
                                    <h6 className="favorite-channel-title">{data.name}</h6>
                                    <a href="#" className="category-name">{data.categoryName}</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>)
}