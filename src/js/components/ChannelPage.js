import Layout from './Layout';
import Stream from './Stream';
import ChannelDescription from './ChannelDescription';
import ChannelCardsLine from './ChannelCardsLine';
import ClipsCardsLine from './ClipsCardsLine';
import GoToBtn from './GoToBtn';
import ChannelCategories from './ChannelCategories';
import { getUrlParams } from '../utils/common';

export default function ChannelPage({ db, showAll, context }) {

    const params = getUrlParams();
    console.log({ params }); // '1'

    const streamId = +params.id;

    if (!streamId) {
        window.location.href = 'notFound.html';
    }

    console.log({ streamId });

    const streamData = db.streamsModel.findOneById(streamId);

    if (!streamData) {
        window.location.href = 'notFound.html';
    }
    console.log({ streamData });

    const channelData = db.channelsModel.findOneById(streamData?.channelId);
    const categoryId = 1;
    const showOnPage = 4;

    return (
        <>
            <Layout db={db} context={context} showFooter={false} showHorizontalMenu={false}>
                <Stream streamData={streamData} channelData={channelData} context={context} />
                <ChannelDescription db={db} context={context} streamId={streamId} showAll={showAll} channelData={channelData} />

                <div className="favourite-categories">
                    <ChannelCardsLine db={db} context={context} title={'Все трансляции'} channelId={channelData.id} showAll={showAll} showOnPage={showOnPage} />
                    <ChannelCardsLine db={db} context={context} title={'Избранные видео'} channelId={channelData.id} showAll={showAll} showOnPage={showOnPage} />
                    <ClipsCardsLine db={db} context={context} title={'Избранные клипы'} channelId={10} showAll={showAll} showOnPage={showOnPage} />
                    <GoToBtn context={context} />
                    <ChannelCategories db={db} context={context} channelId={10} showAll={showAll} />
                </div>
            </Layout>
        </>
    );
}