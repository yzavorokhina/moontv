export default function ChannelCategories({ db, channelId, showAll }) {
    const showOnPage = 5;

    const renderCards = () => {
        const channel = db.channelsModel.findOneById(channelId);
        let categories = db.categoriesModel.findByIds(channel.categories);

        if (!showAll && categories.length > showOnPage) {
            categories = categories.slice(0, showOnPage);
        }

        return categories.map(category => {

            return {
                channel,
                category,
                categoryUrl: "./category.html?id=" + category.id
            }
        });
    }

    return (
        <>
            <div className="channel-categories-container">
                <div className="channel-categories-titles">
                    <div className="favourite-channels-title">
                        <h3>
                            Категории трансляций канала
                        </h3>
                    </div>
                    <div className="favourite-channels-show-all">
                        <a href="#" className="arrowed">
                            Показать все
                            <svg className="show-all-arrow" width="24px" height="24px" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                                    fill="#FF6F3A" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="channel-categories">
                    {renderCards().map(data => (
                        <div key={data.category.id} className="channel-categories-row">
                            <div className="favorite-category">
                                <a href={data.categoryUrl} className="link-wrapper">
                                    <h4>{data.category.shortName}</h4>
                                </a>
                            </div>
                            <div className="favorite-category-description">
                                <a href={data.categoryUrl} className="link-wrapper">
                                    <h3>{data.category.shortDescription}</h3>
                                </a>
                            </div>
                        </div>
                    ))}
                    <div key={channelId + '_key'} className="favorite-category">
                        <h4>Другое</h4>
                    </div>
                </div>
            </div>
        </>
    )
}