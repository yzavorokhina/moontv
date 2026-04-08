import Stream from './Stream';

export default function ChannelPage({ db, categoryId, showAll }) {

    const showOnPage = 5;

    const renderCards = () => {

    }

    return (
        <>
            <div class="main-screen-block">
                <div class="main-banner" id="react-stream">
                    <Stream streamData={streamData} channelData={channelData} />
                </div>
            </div>

            <div class="favourite-categories">
                <ChannelCardsLine db={db} title={'Все трансляции'} categoryId={categoryId} showAll={showAll} />
                <ChannelCardsLine db={db} title={'Избранные видео'} categoryId={categoryId} showAll={showAll} />
            </div>
        </>
    );
}