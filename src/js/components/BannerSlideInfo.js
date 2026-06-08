export default function Banner({ slideData }) {


    return (
        <>
        <div className="banner-info">
            <div className="banner-stream-info">
                <div className="banner-ava">
                    <a href="./channel.html">
                        <img src="./images/banner-ava.jpg" alt="banner ava" />
                    </a>
                </div>
                <div className="stream-info">
                    <a href="./channel.html"><h5>{slideData}</h5></a>
                    <a href="./channel.html"><h5>День 4 / Основная концепция</h5></a>
                    <a href="./channel.html">neuro_activate</a>
                </div>
            </div>
            <div className="stream-statistic">
                <div className="live-watchers">
                    <div className="dot">&#11044;</div>
                    {/* <h5>В эфире</h5> */}

                    <div className="viewers-count">
                        <div id="current-viewers">57 323</div>
                    </div>
                    <h5>В эфире</h5>
                </div>
                <div className="age-rating-row">
                    <div className="age-rating">12+</div>
                </div>
            </div>
        </div>
        </>
    )

}