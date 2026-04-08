import Layout from './Layout';
import Stream from './Stream';

export default function ChannelPage({ db, categoryId, showAll }) {

    const showOnPage = 5;

    const renderCards = () => {

    }

    return (
        <>
            <Layout>
                <div class="main-banner" id="react-banner">
                    <Banner />
                </div>

                <div class="favourite-categories">
                    <ChannelCardsLine db={db} title={'Все трансляции'} categoryId={categoryId} showAll={showAll} />
                    <ChannelCardsLine db={db} title={'Избранные видео'} categoryId={categoryId} showAll={showAll} />
                </div>
            </Layout>
        </>
    );
}