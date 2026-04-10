import Layout from './Layout';
import Banner from './Banner';
import GoToBtn from './GoToBtn';
import FavoriteChannels from './FavoriteChannels';
import ChannelCardsLine from './ChannelCardsLine';

export default function HomePage({ db }) {

    const categoryId = 1;
    const showAll = false;

    return (
        <>
            <Layout db={db}>
                <Banner />
                <FavoriteChannels />

                <div className="favourite-categories">
                    <div class="favourite-categories-title">
                        <h2>Избранные категории</h2>
                    </div>
                    <div class="favourite-category-container">
                        <ChannelCardsLine db={db} title={'Разработка игр и ПО'} categoryId={1} showAll={showAll} />
                    </div>
                     <div class="favourite-category-container">
                        <ChannelCardsLine db={db} title={'Музыка'} categoryId={2} showAll={showAll} />
                     </div>
                     <div class="favourite-category-container">
                        <ChannelCardsLine db={db} title={'Английский язык'} categoryId={3} showAll={showAll} />
                     </div>
                     <div class="favourite-category-container">
                        <ChannelCardsLine db={db} title={'ДиДжеи'} categoryId={4} showAll={showAll} />
                     </div>
                     <div class="favourite-category-container">
                        <ChannelCardsLine db={db} title={'Танцы'} categoryId={5} showAll={showAll} />
                     </div>
                     <div class="favourite-category-container">
                        <ChannelCardsLine db={db} title={'Чтение и писательство'} categoryId={6} showAll={showAll} />
                     </div>
                     <div class="favourite-category-container">
                        <ChannelCardsLine db={db} title={'TDU2'} categoryId={7} showAll={showAll} />
                     </div>
                     <div class="favourite-category-container">
                        <ChannelCardsLine db={db} title={'Skyrim'} categoryId={8} showAll={showAll} />
                     </div>
                </div>

                 <GoToBtn />
            </Layout>
        </>
    );
}