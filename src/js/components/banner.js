import React, { useEffect, useState } from 'react';
import BannerSlideInfo from "./BannerSlideInfo";
import PromoCard from "./PromoCard";

export default function Banner({ db }) {

    const showOnPage = 5;

    let currentSlide = 0;
    let totalSlides = 0;
    let slidesMap = new Map();
    const [currentSlideData, setCurrentSlideData] = useState(0);

    useEffect(() => {
        const slides = document.querySelectorAll('.slide');
        totalSlides = slides.length;
        updateSlidePosition('useEffect');
    });

    const updateSlidePosition = (index) => {
        const slidesWrapper = document.getElementById('slidesWrapper');
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        if (currentSlide >= totalSlides) currentSlide = 0;
        slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        console.log({ index, currentSlide, totalSlides, trans: currentSlide * 100 });

        const slideData = slidesMap.get(+currentSlide);

        try {
            if (slideData) {
                // setCurrentSlideData(currentSlide);
            }
        } catch (err) {
            console.log({ err });
        }
    }

    const prevSlide = () => {
        currentSlide--;
        console.log({ currentSlide, slidesMap });
        updateSlidePosition('prevSlide');
    }

    const nextSlide = () => {
        currentSlide++;
        console.log({ currentSlide, slidesMap });
        updateSlidePosition('nextSlide');
    }

    const renderCards = () => {
        const streams = db.streamsModel.findByName("promo", true);

        if (streams.length > showOnPage) {
            streams = streams.slice(0, showOnPage);
        }

        const streamsData = streams.map(stream => {
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

        for (let i = 0; i < streamsData.length; i++) {
            slidesMap.set(i, streamsData[i]);
        }

        return streamsData;

        console.log({ showOnPage, streams, streamsData });
    }

    return (
        <>
            <div className="main-banner">
                <div className="slider-container">
                    <button id="prevBtn" className="carousel-btn prev-btn" aria-label="Предыдущее видео" onClick={prevSlide}>
                        <svg className="carousel-arrow" width="40px" height="40px" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17 9H5.414l3.293-3.293a.999.999 0 10-1.414-1.414l-5 5a.999.999 0 000 1.414l5 5a.997.997 0 001.414 0 .999.999 0 000-1.414L5.414 11H17a1 1 0 100-2z"
                                fill="currentColor" />
                        </svg>
                    </button>

                    <button id="nextBtn" className="carousel-btn next-btn" aria-label="Следующее видео" onClick={nextSlide}>
                        <svg className="carousel-arrow" width="40px" height="40px" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                                fill="currentColor" />
                        </svg>
                    </button>
                    <div className="slides-wrapper" id="slidesWrapper">
                        {renderCards().map(data => (
                            <div key={data.stream.id} className="slide">
                                <iframe
                                    src={data.stream.videoUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                </iframe>
                            </div>
                        ))}
                    </div>
                    <BannerSlideInfo slideData={currentSlideData} />
                </div>
                <div className="promo">
                    {renderCards().map(data => (
                        <PromoCard streamData={data} />
                    ))}
                </div>
            </div>
        </>
    );
}
