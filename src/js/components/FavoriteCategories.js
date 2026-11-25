import { useEffect } from 'react';
import ChannelCardsLine from './ChannelCardsLine';
import { getElementByLang } from '../utils/langManager';
import { setCurrentLang } from '../utils/langManager';

export default function FavoriteCategories({ db, context }) {

  useEffect(() => {
    const { setLang } = context;
    const currentLangName = setCurrentLang();
    setLang(currentLangName);
  }, []);

  const categoryId = 1;
  const showAll = false;

  const renderCards = () => {
    const { currentLang } = context;
    const categoriesIds = [1, 2, 3, 4, 5, 6, 7, 8];

    const categoriesLang = db.categoriesLocalizationModel.findManyByNameAndIds(currentLang, categoriesIds);

    return categoriesLang.map(category => {
      return {
        name: category.name,
        id: category.id
      }
    });
  }

  return (
    <>
      <div className="favourite-categories">
        <div className="favourite-categories-title">
          <h2>{getElementByLang("home-page-header", context.currentLang) || "Избранные категории"}</h2>
        </div>
        {renderCards().map(data => (
          <div className="favourite-category-container">
            <ChannelCardsLine db={db} context={context} title={data.name} categoryId={data.id} showAll={showAll} />
          </div>
        ))}
      </div>

    </>
  );
}