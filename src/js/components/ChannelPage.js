import Layout from './Layout';
import Stream from './Stream';
import ChannelDescription from './ChannelDescription';
import ChannelCardsLine from './ChannelCardsLine';
import ClipsCardsLine from './ClipsCardsLine';
import GoToBtn from './GoToBtn';
import ChannelCategories from './ChannelCategories';
import { getUrlParams } from '../utils/common';

export default function ChannelPage({ db, showAll }) {

    const params = getUrlParams();
    console.log({ params }); // '1'

    const streamId = +params.id;

    if (!streamId) {
        // window.location.href = 'notFound.html';
    }

    console.log({ streamId });

    const streamData = db.streamsModel.findOneById(streamId);

    if (!streamData) {
        // window.location.href = 'notFound.html';
    }
    console.log({ streamData });

    const channelData = db.channelsModel.findOneById(streamData?.channelId);
    const categoryId = 1;
    const showOnPage = 4;

    return (
        <>
            <Layout db={db} showFooter={false} showHorizontalMenu={false}>
                <Stream streamData={streamData} channelData={channelData} />
                <ChannelDescription db={db} streamId={streamId} showAll={showAll} channelData={channelData} />

                <div className="favourite-categories">
                    <ChannelCardsLine db={db} title={'Все трансляции'} categoryId={categoryId} showAll={showAll} showOnPage={showOnPage} />
                    <ChannelCardsLine db={db} title={'Избранные видео'} categoryId={categoryId} showAll={showAll} showOnPage={showOnPage} />
                    <ClipsCardsLine db={db} title={'Избранные клипы'} channelId={10} showAll={showAll} showOnPage={showOnPage} />
                    <GoToBtn />
                    <ChannelCategories db={db} channelId={10} showAll={showAll} />
                </div>
            </Layout>
        </>
    );
}