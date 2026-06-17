import React, { useEffect, useState } from 'react';
import BannerSlideInfo from "./BannerSlideInfo";
import PromoCard from "./PromoCard";

export default function Banner({ db }) {

    const showOnPage = 5;

    let totalSlides = 0;
    let slidesMap = new Map();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slides = document.querySelectorAll('.slide');
        totalSlides = slides.length;
        updateSlidePosition('useEffect');
        //console.log({ currentSlide, slidesMap });
    });

    const updateSlidePosition = (index) => {
        const slidesWrapper = document.getElementById('slidesWrapper');
        if (currentSlide < 0) {
            setCurrentSlide(totalSlides - 1);
        } else if (currentSlide >= totalSlides) {
            setCurrentSlide(0);
            //console.log({ if: currentSlide >= totalSlides, currentSlide });
        }
        slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        //console.log({ index, currentSlide, totalSlides, trans: currentSlide * 100 });

        const slideData = slidesMap.get(currentSlide);
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => { return prev - 1 });
        //console.log({ currentSlide, slidesMap });
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => { return prev + 1 });
        //console.log({ currentSlide, slidesMap });
    }

    const renderCards = () => {
        let streams = db.streamsModel.findByName("promo", true);

        if (streams.length > showOnPage) {
            streams = streams.slice(0, showOnPage);
        }

        let slideId = -1;
        const streamsData = streams.map(stream => {
            const channel = db.channelsModel.findOneById(stream.channelId);
            const category = db.categoriesModel.findOneById(stream.categoryId);
            slideId++;
            return {
                slideId,
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
                    <BannerSlideInfo slidesMap={slidesMap} currentSlide={currentSlide} />
                </div>
                <div className="promo">
                    {renderCards().map(data => (
                        <PromoCard streamData={data} setCurrentSlide={setCurrentSlide} />
                    ))}
                </div>
            </div>
        </>
    );
}
