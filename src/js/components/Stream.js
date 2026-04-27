import Chat from './Chat';

export default function Stream({ streamData, channelData }) {

    return (
        <>
            <div className="stream-wrapper">
                <div className="stream-video">
                    {/* <div className="video-container">
                        <video className="current-video" controls>
                            <source src="video1.mp4" type="video/mp4">  */}
                    {/* <iframe id="streamTV"
                        src="https://www.youtube.com/embed/jfKfPfyJRdk?si=eavHTgCuUL64LPPd"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

                    <iframe src="https://www.youtube.com/embed/RVRF3BXeD80?si=IGZxtrrFbpTd3hDO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    {/* </video>
                    </div> */}
                </div>
                <div className="channel-info">
                    <div className="channel-stream-info">
                        <div className="channel-ava">
                            <a href="./channel.html">
                                <img id="channelIcon" src={channelData.iconUrl} alt="channel ava" />
                            </a>
                        </div>
                        <div className="stream-info">
                            <h5 id="streamTitle">{streamData.title}</h5>
                            <h5 id="streamDes">{streamData.description}</h5>
                            <a href="./channel.html" id="channelName">{channelData.name}</a>
                        </div>
                    </div>
                    <div className="stream-statistic">
                        <div className="live-watchers">
                            <h5>В эфире</h5>
                            <span>&#11044;</span>
                            <div className="viewer-count">
                                <span id="current-viewers">{streamData.audience}</span>
                            </div>
                        </div>
                        <div className="buttons-row">
                            <button className="follow-button">Отслеживать</button>
                            <button className="subscribe-button">Подписаться</button>
                            <span id="ageRating" className="age-rating">{streamData.ageRate}+</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chat">
                <Chat />
            </div>
        </>
    );
}