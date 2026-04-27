import Layout from "./Layout";
import CategoryDescription from './CategoryDescription';
import ChannelCards from './ChannelCards';
import GoToBtn from "./GoToBtn";
import { getUrlParams } from '../utils/common.js';

export default function CategoryPage({ db, showAll }) {

    const params = getUrlParams();
    console.log(params.id); // '1'
    
    const categoryId = +params.id || 1;

    const categoryData = db.categoriesModel.findOneById(categoryId);
    const streamData = db.streamsModel.findOneById(categoryId);
    const channelData = db.channelsModel.findOneById(streamData.channelId);

    return (
        <>
            <Layout db={db}>
                <div className="category-description-container">
                    <div className="category-description" id="react-category-description">
                        <CategoryDescription categoryData={categoryData} channelData={channelData} />
                    </div>
                    <div className="sorting-buttons-1">
                        <button>Онлайн</button>
                        <button>Видео</button>
                        <button>Клипы</button>
                    </div>
                    <div className="sorting-buttons-2">
                        <div className="block-buttons-1">
                            <div className="category-search-by-language">
                                <label htmlFor="search-by-language" className="visually-hidden">Язык</label>
                                <input type="search" id="language-search" className="search-by-language"
                                    placeholder="Язык" aria-label="Search" />
                            </div>
                            <div className="category-search-by-tag">
                                <label htmlFor="search-by-tag" className="visually-hidden">Искать по тегам</label>
                                <input type="search" id="tag-search" className="search-by-tag"
                                    placeholder="Искать по тегам" aria-label="Search" />
                            </div>
                        </div>
                        <div className="block-buttons-2">
                            <span>Сортировка по:</span>
                            <button>
                                {/* <!-- License: PD. Made by stephenhutchings: https://github.com/stephenhutchings/typicons.font --> */}
                                <svg className="sorting-svg" fill="currentColor" width="20px" height="20px" viewBox="0 0 24 24"
                                    version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.895 16.553l-4-8c-.339-.678-1.45-.678-1.789 0l-4 8c-.247.494-.047 1.095.447 1.342.495.248 1.095.046 1.342-.447l.723-1.448h4.764l.724 1.447c.175.351.528.553.895.553.15 0 .303-.034.446-.105.494-.248.695-.848.448-1.342zm-6.277-2.553l1.382-2.764 1.382 2.764h-2.764zM22 18h-6c-.379 0-.725-.214-.895-.553s-.132-.744.095-1.047l4.8-6.4h-4c-.552 0-1-.448-1-1s.448-1 1-1h6c.379 0 .725.214.895.553s.132.744-.095 1.047l-4.8 6.4h4c.552 0 1 .448 1 1s-.448 1-1 1zM14 14h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1z" />
                                </svg>
                                Названию</button>
                            <button>
                                {/* <!-- License: MIT. Made by Microsoft: https://github.com/microsoft/fluentui-system-icons --> */}
                                <svg className="sorting-svg" width="16px" height="16px" viewBox="0 0 28 28" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink">
                                    {/* <!-- Uploaded to SVGRepo https://www.svgrepo.com --> */}
                                    <title>ic_fluent_people_28_regular</title>
                                    <desc>Created with Sketch.</desc>
                                    <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none"
                                        fillRule="evenodd">
                                        <g id="ic_fluent_people_28_regular" fill="currentColor"
                                            fillRule="nonzero">
                                            <path
                                                d="M4,16 L15,16.001 C16.0538182,16.001 16.9181157,16.8164855 16.9945109,17.8516842 L17,18.001 L17,20.5 C16.999,24.7 12.713,26 9.5,26 C6.35126,26 2.1710504,24.75148 2.00510151,20.7485328 L2,20.5 L2,18 C2,16.9461818 2.81639669,16.0818843 3.85080841,16.0054891 L4,16 Z M24,16 L24.1491916,16.0054891 C25.1318827,16.0780645 25.9178153,16.8617218 25.9939518,17.8434235 L26,18 L26,20 C25.999,23.759 22.57,25 20,25 C18.942,25 17.741,24.785 16.691,24.275 C17.009,23.897 17.278,23.477 17.488,23.007 C18.4456,23.427 19.4789867,23.4924578 19.9157784,23.4993188 L20.2043433,23.4963225 C21.2400556,23.4606629 24.334766,23.1116572 24.4936471,20.2325914 L24.5,20 L24.5,18 C24.5,17.7546667 24.3222222,17.5504198 24.0895748,17.5080604 L24,17.5 L17.949,17.501 C17.865,16.999625 17.6554375,16.5434219 17.3544785,16.1605273 L17.22,16.001 L24,16 Z M4,17.5 L3.899344,17.51 C3.77496,17.53528 3.69,17.6028 3.646,17.646 C3.6028,17.69 3.53528,17.77432 3.51,17.89896 L3.5,18 L3.5,20.5 C3.5,21.839 4.087,22.829 5.295,23.525 C6.29135714,24.1007143 7.68434694,24.4479337 9.15851093,24.4945991 L9.5,24.5 L9.93487113,24.4897846 C11.4554554,24.4219073 15.3140372,23.9331951 15.4935181,20.7322803 L15.5,20.499 L15.5,18.001 C15.5,17.7565556 15.3222222,17.5516173 15.0895748,17.5090933 L15,17.501 L4,17.5 Z M9.5,3 C12.538,3 15,5.463 15,8.5 C15,11.537 12.538,14 9.5,14 C6.462,14 4,11.537 4,8.5 C4,5.463 6.462,3 9.5,3 Z M20.5,5 C22.985,5 25,7.015 25,9.5 C25,11.985 22.985,14 20.5,14 C18.015,14 16,11.985 16,9.5 C16,7.015 18.015,5 20.5,5 Z M9.5,4.5 C7.294,4.5 5.5,6.294 5.5,8.5 C5.5,10.706 7.294,12.5 9.5,12.5 C11.706,12.5 13.5,10.706 13.5,8.5 C13.5,6.294 11.706,4.5 9.5,4.5 Z M20.5,6.5 C18.846,6.5 17.5,7.846 17.5,9.5 C17.5,11.154 18.846,12.5 20.5,12.5 C22.154,12.5 23.5,11.154 23.5,9.5 C23.5,7.846 22.154,6.5 20.5,6.5 Z"
                                                id="🎨-Color"></path>
                                        </g>
                                    </g>
                                </svg>
                                Кол-ву зрителей</button>
                            <button>
                                {/* <!-- License: MIT. Made by Microsoft: https://github.com/microsoft/fluentui-system-icons --> */}
                                <svg className="sorting-svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.99984 5.75C1.99984 5.33579 2.33562 5 2.74984 5H21.2498C21.664 5 21.9998 5.33579 21.9998 5.75C21.9998 6.16421 21.664 6.5 21.2498 6.5H2.74984C2.33562 6.5 1.99984 6.16421 1.99984 5.75ZM1.99984 12.25C1.99984 11.8358 2.33562 11.5 2.74984 11.5H21.2498C21.664 11.5 21.9998 11.8358 21.9998 12.25C21.9998 12.6642 21.664 13 21.2498 13H2.74984C2.33562 13 1.99984 12.6642 1.99984 12.25ZM18.9998 18.75C18.9998 18.3358 19.3356 18 19.7498 18H21.2498C21.664 18 21.9998 18.3358 21.9998 18.75C21.9998 19.1642 21.664 19.5 21.2498 19.5H19.7498C19.3356 19.5 18.9998 19.1642 18.9998 18.75Z"
                                        fill="currentColor" />
                                    <path
                                        d="M2.41586 18.7377C2.62651 18.5972 2.83038 18.4376 3.02319 18.2633V22.25C3.02319 22.6642 3.35898 23 3.77319 23C4.18741 23 4.52319 22.6642 4.52319 22.25V15.75C4.52319 15.356 4.21942 15.033 3.83332 15.0024C3.46457 14.9719 3.12113 15.2183 3.03989 15.5897C2.91329 16.1684 2.34817 16.98 1.58381 17.4896C1.23916 17.7194 1.14603 18.185 1.3758 18.5297C1.60556 18.8743 2.07121 18.9674 2.41586 18.7377Z"
                                        fill="currentColor" />
                                    <path
                                        d="M7.99976 17.5227C7.99976 16.995 8.44328 16.5 8.98552 16.5C9.39269 16.5 9.72045 16.6909 9.87891 16.9345C10.0148 17.1434 10.0963 17.4998 9.78534 18.0292C9.63583 18.2837 9.4098 18.5114 9.10378 18.7531C8.95132 18.8735 8.78821 18.9904 8.61083 19.1158L8.53705 19.1679C8.38482 19.2753 8.22186 19.3902 8.06445 19.5087C7.32083 20.0683 6.49976 20.8536 6.49976 22.25C6.49976 22.6642 6.83554 23 7.24976 23L7.25793 23L7.26611 23H10.7003C11.1145 23 11.4503 22.6642 11.4503 22.25C11.4503 21.8358 11.1145 21.5 10.7003 21.5H8.18741C8.34819 21.2182 8.61035 20.9752 8.96639 20.7072C9.10386 20.6038 9.24576 20.5036 9.39901 20.3955L9.47661 20.3407C9.6552 20.2145 9.84692 20.0775 10.0335 19.9302C10.4055 19.6364 10.7942 19.2731 11.0787 18.789C11.6356 17.8411 11.625 16.868 11.1363 16.1166C10.6701 15.4 9.84073 15 8.98552 15C7.50797 15 6.49976 16.2777 6.49976 17.5227C6.49976 17.9369 6.83554 18.2727 7.24976 18.2727C7.66397 18.2727 7.99976 17.9369 7.99976 17.5227Z"
                                        fill="currentColor" />
                                    <path
                                        d="M14.4709 17.1377C14.5029 17.0255 14.5792 16.8666 14.7218 16.7409C14.8502 16.6276 15.0773 16.5 15.4997 16.5C16.261 16.5 16.4997 17.0002 16.4997 17.2273C16.4997 17.4724 16.4474 17.7178 16.3099 17.8907C16.1986 18.0308 15.9313 18.25 15.208 18.25C14.7938 18.25 14.458 18.5858 14.458 19C14.458 19.4142 14.7938 19.75 15.208 19.75C15.4815 19.75 15.8594 19.7864 16.1424 19.9191C16.2743 19.9809 16.3569 20.0505 16.4069 20.1207C16.4517 20.1837 16.4997 20.287 16.4997 20.4773C16.4997 20.965 16.3475 21.1807 16.2191 21.2891C16.068 21.4167 15.8237 21.5 15.4997 21.5C15.1377 21.5 14.9328 21.4374 14.8072 21.3578C14.6958 21.2873 14.5675 21.1538 14.4621 20.8338C14.3327 20.4403 13.9087 20.2263 13.5153 20.3558C13.1218 20.4852 12.9078 20.9092 13.0373 21.3026C13.2236 21.8689 13.5328 22.3263 14.0048 22.6252C14.4624 22.9149 14.9867 23 15.4997 23C16.0507 23 16.6815 22.8618 17.1866 22.4353C17.7145 21.9898 17.9997 21.3191 17.9997 20.4773C17.9997 20.0027 17.8699 19.5891 17.6285 19.2504C17.5499 19.14 17.4628 19.0423 17.3706 18.9559C17.4102 18.9135 17.4481 18.8695 17.4842 18.8241C17.9221 18.2731 17.9997 17.6321 17.9997 17.2273C17.9997 16.1543 17.0718 15 15.4997 15C14.7343 15 14.1483 15.2466 13.7295 15.616C13.325 15.9728 13.1202 16.4048 13.0285 16.7259C12.9148 17.1242 13.1455 17.5393 13.5438 17.653C13.9421 17.7667 14.3572 17.536 14.4709 17.1377Z"
                                        fill="currentColor" />
                                </svg>
                                Кол-ву просмотров</button>
                            <button>
                                {/* <!-- License: PD. Made by Aleksey Popov: https://dribbble.com/AlekseyPopov --> */}
                                <svg className="sorting-svg" fill="currentColor" width="18px" height="18px" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M13,11 L17,11 L17,13 L11,13 L11,6 L13,6 L13,11 Z" />
                                </svg>
                                Времени </button>
                        </div>
                    </div>
                    <div className="current-language-and-tag">
                        <div className="category-languages-row" role="group" aria-label="category-tags-group">
                            <span>Язык каналов:</span> <span
                                className="category-current-language">English</span>
                        </div>
                        <div className="category-tags-row" role="group" aria-label="category-tags-group">
                            <span>Теги каналов:</span> <span className="category-current-tag">Programming</span>
                        </div>
                    </div>
                </div>
                <div className="favourite-categories">
                    <div className="one-category-container">
                        <div className="channels-row" id="category_cards">
                            <ChannelCards db={db} categoryId={categoryId} showAll={showAll} />
                        </div>
                    </div>
                </div>
                <GoToBtn />
            </Layout>
        </>
    )
}