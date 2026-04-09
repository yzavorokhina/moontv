
export default function SearchCards({ db, search, showAll }) {

    const showOnPage = 5;

    const renderCards = () => {

        if (!search) {
            search = "search";
        }

        let streamsFiltered = db.streamsModel.findByNameRegex('title', search);

        if (!showAll && streamsFiltered.length > showOnPage) {
            streamsFiltered = streamsFiltered.slice(0, showOnPage);
        }

        return streamsFiltered.map(stream => {
            const channel = db.channelsModel.findOneById(stream.channelId);
            const category = db.categoriesModel.findOneById(stream.categoryId);

            return {
                stream,
                channel,
                category,
                streamUrl: "./channel.html?id=" + stream.id,
                categoryUrl: "./category.html?id=" + category.id
            }
        });
    }

    return (
        <>
            {renderCards().map(data => (
                <div key={data.stream.id} className="channel-card mb-3">
                    <a href={data.streamUrl} className="link-wrapper">
                        <img className="card-img-top" src={data.stream.previewUrl} alt="foto" />
                    </a>
                    <div className="card-body">
                        <div className="stream-info-row">
                            <a href={data.streamUrl} className="link-wrapper">
                                <img className="channel-img" src={data.channel.iconUrl} alt="foto" />
                            </a>
                            <div className="stream-titles">
                                <a href={data.streamUrl} className="link-wrapper">
                                    <h5 className="stream-title">{data.stream.title}</h5>
                                </a>
                                <a href={data.streamUrl} className="link-wrapper">
                                    <p className="channel-title">{data.channel.name}</p>
                                </a>
                            </div>
                        </div>
                        <a href={data.categoryUrl} className="link-wrapper">
                            <p className="category-name-info">{data.category.name}</p>
                        </a>
                        <div className="tags-row" role="group" aria-label="tags-group">
                            {data.stream.languages.map((lang, index) => (
                                <a key={index} href={data.streamUrl} className="link-wrapper">
                                    <button type="button" className="button-tag">{lang}</button>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="stream-labels">
                        <div className="stream-live">
                            <span>&#11044;</span>
                            <h6>В эфире</h6>
                        </div>
                        <div className="stream-age-rating">
                            <span className="label-age-rating">12+</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}