import { getUrlParams } from '../utils/common.js';

export default function CategoryCards({ db }) {
    const showTags = 2;

    const renderCards = () => {
        const params = getUrlParams();
        const tagId = +params.tag || 0;
        console.log({ tagId }); // '1'

        let categories = [];
        if (tagId === 0) {
            categories = db.categoriesModel.getAll();
        } else {
            categories = db.categoriesModel.findMany(cat => cat.tags.indexOf(tagId) > -1);
        }
        return categories.map(category => {
            let tags = db.tagsModel.findByIds(category.tags);

            return {
                category,
                tags: tags.slice(0, showTags),
                categoryUrl: "./category.html?id=" + category.id,
            }
        });
    }
    return (
        <>
            {renderCards().map(data => (
                <div key={data.category.id} className="category-card ">
                    <a href={data.categoryUrl} className="category-link-wrapper">
                        <img className="category-img-top" src={data.category.imagePreviewUrl}
                            alt="foto" />
                    </a>
                    <div className="card-body">
                        <a href={data.categoryUrl} className="category-link-wrapper">
                            <p className="category-name-info">{data.category.name}</p>
                        </a>
                        <div className="category-info-row">
                            <p>{data.category.shortDescription}</p>
                        </div>
                        <div className="tags-row" role="group" aria-label="tags-group">
                            {data.tags.map((tag) => (
                                <a key={tag.id} href={`./categories.html?tag=${tag.id}`} className="link-wrapper">
                                    <button type="button" className="button-tag">{tag.name}</button>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}