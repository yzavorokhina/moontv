
export default function ClipsCards({ db, channelId, showAll }) {

    const showOnPage = 5;

    const renderCards = () => {
        let clipsFiltered = db.clipsModel.findByName('channelId', channelId);
        console.log({ channelId, clipsFiltered });

        if (!showAll && clipsFiltered.length > showOnPage) {
            clipsFiltered = clipsFiltered.slice(0, showOnPage);
        }

        return clipsFiltered.map(clip => {
            const channel = db.channelsModel.findOneById(clip.channelId);

            return {
                clip,
                channel,
                clipUrl: "./channel.html?id=" + clip.id,
                channelUrl: "./channel.html?id=" + clip.id,
            }
        });
    }

    return (
        <>
            {renderCards().map(data => (
                <div key={data.clip.id} className="channel-card mb-3">
                    <a href={data.clipUrl} className="link-wrapper">
                        <img className="card-img-top" src={data.clip.previewUrl} alt="foto" />
                    </a>
                    <div className="card-body">
                        <div className="stream-info-row">
                            <a href={data.channelUrl} className="link-wrapper">
                                <img className="channel-img" src={data.channel.iconUrl} alt="foto" />
                            </a>
                            <div className="clip-titles">
                                <a href={data.clipUrl} className="link-wrapper">
                                    <h5 className="clip-title">{data.clip.title}</h5>
                                </a>
                                <a href={data.channelUrl} className="link-wrapper">
                                    <p className="channel-title">{data.channel.name}</p>
                                </a>
                            </div>
                        </div>
                        <div className="clip-author-wrapper">
                            <span>Clip author:</span>
                            <a href={data.channelUrl} className="link-wrapper">
                                <p className="clip-author-name">{data.channel.name}</p>
                            </a>
                        </div>

                    </div>
                    <div className="stream-labels">
                        <div className="clip-always-offline">
                            <span>&#11044;</span>
                            <h6>В эфире</h6>
                        </div>
                        <div className="stream-age-rating">
                            <span className="label-age-rating">{data.clip.ageRate} +</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}