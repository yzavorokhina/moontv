import React, { useEffect } from 'react';

export default function VerticalMenu({ db, showAll }) {

    const showItems = 11;
    // const showItemsMin = 8;

    const truncateByWords = (text, wordCount) => {
        const words = text.split(' ');
        if (words.length <= wordCount) {
            return text;
        }
        return words.slice(0, wordCount).join(' ') + '...';
    }

    function truncateByChars(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    }

    const renderCards = () => {
        let streamsFiltered = db.streamsModel.findMany(stream => !stream.promo);

        if (!showAll && streamsFiltered.length > showItems) {
            streamsFiltered = streamsFiltered.slice(0, showItems);
        }

        return streamsFiltered.map(stream => {
            const channel = db.channelsModel.findOneById(stream.channelId);
            const category = db.categoriesModel.findOneById(stream.categoryId);

            return {
                stream,
                channel,
                category,
                streamUrl: "/dist/channel.html?id=" + stream.id,
                categoryUrl: "/dist/category.html?id=" + category.id,
            }
        });
    }

    const scrollFunction = () => {
        // Показываем кнопку, если проскроллили больше 20 px
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            buttonUp.style.display = "block";
        } else {
            // Скрываем, если вернулись наверх
            buttonUp.style.display = "none";
        }
    }

    useEffect(() => {
        // Получаем кнопку по ID
        var buttonUp = document.getElementById("buttonUp");
        // Обработчик скролла: показываем/скрываем кнопку
        window.onscroll = function () { scrollFunction() };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const closeMenu = () => {
        var openBtn = document.getElementById("openBtn");
        openBtn.style.display = "block";
        var closeBtn = document.getElementById("closeBtn");
        closeBtn.style.display = "none";
        console.log({ action: "closeMenu" });
    }

    const openMenu = () => {
        var openBtn = document.getElementById("openBtn");
        openBtn.style.display = "none";
        var closeBtn = document.getElementById("closeBtn");
        closeBtn.style.display = "block";
        console.log({ action: "openMenu" });
    }

    return (
        <>

            <div className="vertical-menu-container" style={{ maxWidth: 222 + 'px' }} >
                <nav className="vertical-menu" id="vertical-menu">
                    <button className="vertical-menu-title">
                        <h6>Рекомендуем</h6>
                        <svg className="recomended" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="style=linear">
                                <g id="like">
                                    <path id="vector" d="M7.66003 10.1022L11.76 4.00221C12.16 3.40221 13.16 3.00221 13.96 3.30221C14.86 3.60221 15.46 4.60221 15.26 5.50221L14.76 8.70221C14.66 9.40221 15.16 9.90221 15.76 9.90221H19.76C21.26 9.90221 22.1801 11.0522 21.66 12.5022C21.14 13.9522 20.6801 16.5522 19.26 18.8022C18.6102 19.8318 17.8975 20.5522 16.6801 20.5522C12.6801 20.5522 6.66003 20.5522 6.66003 20.5522" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" />
                                    <path id="rec" d="M2.18005 10.5522C2.18005 9.99996 2.62777 9.55225 3.18005 9.55225H6.68005C7.23234 9.55225 7.68005 9.99996 7.68005 10.5522V20.5522H3.18005C2.62777 20.5522 2.18005 20.1045 2.18005 19.5522V10.5522Z" stroke="currentColor" strokeWidth="1" />
                                </g>
                            </g>
                        </svg>
                    </button>
                    <ul>
                        {renderCards().map(data => (
                            <li key={data.channel.id}>
                                <div className="menu1">
                                    {/* <div className="menu-visual"> */}
                                    <div className="menu-stream-cover">
                                        <a href={data.streamUrl}>
                                            <img src={data.channel.iconUrl}
                                                style={{ width: 40 + 'px', height: 40 + 'px' }} alt="photo" />
                                        </a>
                                    </div>
                                    <div className="menu-stream-live-indicator">
                                        <span style={{ color: '#E2552D', fontSize: 6 + 'px' }}>&#11044;</span>
                                    </div>
                                    {/* </div> */}

                                    <div className="menu-stream-info">
                                        <a href={data.streamUrl}><h6>{truncateByChars(data.channel.name, 12)}</h6></a>
                                        <a href={data.categoryUrl} className="category-name">{truncateByWords(data.category.name, 3)}</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <button id="closeBtn" className="close-open-menu-button"
                        type="button"
                        aria-label="Закрыть меню"
                        onClick={closeMenu}
                    >
                        <img src={`./images/expend-icon-left-dark.svg`} title="close menu" />
                    </button>
                    <button id="openBtn" className="close-open-menu-button"
                        type="button"
                        aria-label="Открыть меню"
                        style={{ display: 'none' }}
                        onClick={openMenu}
                    >
                        <img src={`./images/expend-icon-right-dark.svg`} title="open menu" />
                    </button>

                </nav>

                <div className="buttonUp buttonUp_hide">
                    <button id="buttonUp" onClick={handleClick}></button>
                </div>
            </div>
        </>
    )
}