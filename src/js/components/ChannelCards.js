import React, { useEffect } from 'react';
import { setCurrentLang } from '../utils/langManager';

export default function ChannelCards({ db, categoryId, channelId, showAll, showOnPage, context }) {

        useEffect(() => {
            const { setLang } = context;
            const currentLangName = setCurrentLang();
            setLang(currentLangName);
        }, []);

    const truncateByChars = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    }

    const truncateByWords = (text, wordCount) => {
        const words = text.split(' ');
        if (words.length <= wordCount) {
            return text;
        }
        return words.slice(0, wordCount).join(' ') + '...';
    }

    const renderCards = () => {
        let streamsFiltered = [];
        const { currentLang } = context;

        if (categoryId) {
            streamsFiltered = db.streamsModel.findByName('categoryId', categoryId);
        } else if (channelId) {
            streamsFiltered = db.streamsModel.findByName('channelId', channelId);
        }
        console.log({ showAll, categoryId, streamsFiltered });

        if (!showOnPage) {
            showOnPage = 5;
        }

        if (!showAll && streamsFiltered.length > showOnPage) {
            streamsFiltered = streamsFiltered.slice(0, showOnPage);
            console.log({ categoryId, streamsFiltered });
        }


        return streamsFiltered.map(stream => {
            const channel = db.channelsModel.findOneById(stream.channelId);
            const category = db.categoriesModel.findOneById(stream.categoryId);
            const categoryLang = db.categoriesLocalizationModel.findOneByNameAndId(currentLang, category.id);

            return {
                stream,
                channel,
                category,
                streamUrl: "./channel.html?id=" + stream.id,
                categoryUrl: "./category.html?id=" + category.id,
                categoryLang,
                currentLang
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
                                    <h5 className="stream-title">{truncateByWords(data.stream.title, 6)}</h5>
                                </a>
                                <a href={data.streamUrl} className="link-wrapper">
                                    <p className="channel-title">{data.channel.name}</p>
                                </a>
                            </div>
                        </div>
                        <a href={data.categoryUrl} className="link-wrapper">
                            <p className="category-name-info">{data.categoryLang.name}</p>
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
                        {data.stream.online && <div className="stream-live">
                            <span>&#11044;</span>
                            {/* <h6>В эфире</h6> */}
                            <div className="viewer-count">
                                <span id="viewers">{data.stream.audience}</span>
                            </div>
                        </div>}
                        {data.stream.online === false && <div className="stream-live">
                            <div className="viewer-count">
                                <span id="viewers">{data.stream.showed} просмотров</span>
                            </div>
                        </div>}
                        <div className="stream-age-rating">
                            <span className="label-age-rating">{data.stream.ageRate}+</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}