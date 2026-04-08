import ChannelCards from './ChannelCards';

export default function ChannelCardsLine({ db, title, categoryId, showAll }) {

    return (
        <>
            <div className="all-video-container">
                <div className="titles-row">
                    <div className="section-title">
                        <a href="/page" className="link-wrapper">
                            <h2>
                                {/* <!-- License: PD. Made by mapbox: https://github.com/mapbox/maki --> */}
                                <svg fill="#CECED6" width="16px" height="16px" viewBox="0 0 15 15"
                                    version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14,7.5c0,3.5899-2.9101,6.5-6.5,6.5S1,11.0899,1,7.5S3.9101,1,7.5,1S14,3.9101,14,7.5z" />
                                </svg>
                                {title}
                            </h2>
                        </a>
                    </div>
                    <div className="show-all-categories">
                        <a href="#" className="arrowed">
                            Показать все
                            {/* <!-- License: MIT. Made by Shopify: https://github.com/Shopify/polaris --> */}
                            <svg className="show-all-arrow" width="24px" height="24px" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                                    fill="#CECED6" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="channels-row">
                    <ChannelCards db={db} categoryId={categoryId} showAll={showAll} />
                </div>
            </div>
        </>
    );
}