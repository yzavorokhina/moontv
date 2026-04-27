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

    const streamId = +params.id || 1;

    const streamData = db.streamsModel.findOneById(streamId);
    const channelData = db.channelsModel.findOneById(streamData.channelId);
    const categoryId = 1;

    return (
        <>
            <Layout db={db} showFooter={false} showHorizontalMenu={false}>
                <div className="main-screen-block">
                    <div className="main-banner" id="react-stream">
                        <Stream streamData={streamData} channelData={channelData} />
                    </div>
                    <div className="channel-discription" id="react-channel-description">
                        <ChannelDescription db={db} streamId={streamId} showAll={showAll} />
                    </div>
                </div>

                <div className="favourite-categories">
                    <ChannelCardsLine db={db} title={'Все трансляции'} categoryId={categoryId} showAll={showAll} />
                    <ChannelCardsLine db={db} title={'Избранные видео'} categoryId={categoryId} showAll={showAll} />
                    <ClipsCardsLine db={db} title={'Избранные клипы'} channelId={10} showAll={showAll} />
                    <GoToBtn />
                    <ChannelCategories db={db} channelId={10} showAll={showAll}/>
                </div>
            </Layout>
        </>
    );
}