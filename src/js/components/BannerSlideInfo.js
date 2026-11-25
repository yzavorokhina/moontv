import { useEffect, useState } from 'react';
import { getElementByLang } from '../utils/langManager';

export default function BannerSlideInfo({ slidesMap, currentSlide, context }) {

    const [currentSlideData, setCurrentSlideData] = useState('sdsds');

    useEffect(() => {
        const slideData = slidesMap.get(+currentSlide);
        setCurrentSlideData(slideData);
        console.log({ BannerSlideInfo: "useEffect", currentSlide, slidesMap, slideData });
    });

    return (
        <>
            <div className="banner-info">
                <div className="banner-stream-info">
                    <div className="banner-ava">
                        <a href={currentSlideData?.streamUrl}>
                            <img src={currentSlideData?.stream?.bannerAva} />
                        </a>
                    </div>
                    <div className="stream-info">
                        <a href={currentSlideData?.streamUrl}><h5>{currentSlideData?.stream?.title}</h5></a>
                        <a href={currentSlideData?.streamUrl}><h5>{currentSlideData?.stream?.description}</h5></a>
                        <a href={currentSlideData?.streamUrl}>{currentSlideData?.channel?.name}</a>
                    </div>
                </div>
                <div className="stream-statistic">
                    <div className="live-watchers">
                        <h5>{getElementByLang("banner-live-watchers", context.currentLang) || "В эфире"}</h5>

                        <div className="dot">&#11044;</div>

                        <div className="viewers-count">
                            <div id="current-viewers">{currentSlideData?.stream?.audience}</div>
                        </div>
                    </div>
                    <div className="age-rating-row">
                        <div className="age-rating">{currentSlideData?.stream?.ageRate}+</div>
                    </div>
                </div>
            </div>
        </>
    )

}