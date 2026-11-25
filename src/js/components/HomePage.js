import { useEffect } from 'react';
import Layout from './Layout';
import Banner from './Banner';
import GoToBtn from './GoToBtn';
import FavoriteChannels from './FavoriteChannels';
import FavoriteCategories from './FavoriteCategories';
import { setCurrentLang } from '../utils/langManager';

export default function HomePage({ db, context }) {

   useEffect(() => {
      const { setLang } = context;
      const currentLangName = setCurrentLang();
      setLang(currentLangName);
   }, []);

   return (
      <>
         <Layout db={db} context={context}>
            <Banner db={db} context={context} />
            <FavoriteChannels db={db} context={context} />
            <FavoriteCategories db={db} context={context} />
            <GoToBtn titleId={"goToAllCategoriesPage"} url={"categories.html"} context={context} />
         </Layout>
      </>
   );
}