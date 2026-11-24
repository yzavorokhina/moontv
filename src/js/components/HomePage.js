import React, { useEffect } from 'react';
import Layout from './Layout';
import Banner from './Banner';
import GoToBtn from './GoToBtn';
import FavoriteChannels from './FavoriteChannels';
import ChannelCardsLine from './ChannelCardsLine';
import { getElementByLang } from '../utils/langManager';
import { setCurrentLang } from '../utils/langManager';

export default function HomePage({ db, context }) {

   useEffect(() => {
      const { setLang } = context;
      const currentLangName = setCurrentLang();
      setLang(currentLangName);
   }, []);

   const categoryId = 1;
   const showAll = false;

   return (
      <>
         <Layout db={db} context={context}>
            <Banner db={db} context={context} />
            <FavoriteChannels context={context} />

            <div className="favourite-categories">
               <div className="favourite-categories-title">
                  <h2>{getElementByLang("home-page-header", context.currentLang) || "Избранные категории"}</h2>
               </div>
               <div className="favourite-category-container">
                  <ChannelCardsLine db={db} context={context} title={'Разработка игр и ПО'} categoryId={1} showAll={showAll} />
               </div>
               <div className="favourite-category-container">
                  <ChannelCardsLine db={db} context={context} title={'Музыка'} categoryId={2} showAll={showAll} />
               </div>
               <div className="favourite-category-container">
                  <ChannelCardsLine db={db} context={context} title={'Английский язык'} categoryId={3} showAll={showAll} />
               </div>
               <div className="favourite-category-container">
                  <ChannelCardsLine db={db} context={context} title={'ДиДжеи'} categoryId={4} showAll={showAll} />
               </div>
               <div className="favourite-category-container">
                  <ChannelCardsLine db={db} context={context} title={'Танцы'} categoryId={5} showAll={showAll} />
               </div>
               <div className="favourite-category-container">
                  <ChannelCardsLine db={db} context={context} title={'Чтение и писательство'} categoryId={6} showAll={showAll} />
               </div>
               <div className="favourite-category-container">
                  <ChannelCardsLine db={db} context={context} title={'TDU2'} categoryId={7} showAll={showAll} />
               </div>
               <div className="favourite-category-container">
                  <ChannelCardsLine db={db} context={context} title={'Skyrim'} categoryId={8} showAll={showAll} />
               </div>
            </div>

            <GoToBtn titleId={"goToAllCategoriesPage"} url={"categories.html"} context={context} />
         </Layout>
      </>
   );
}