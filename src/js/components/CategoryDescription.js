
export default function CategoryDescription({ categoryData, channelData }) {

    return (
        <>
            <div className="category-description-img-container">
                <img className="category-description-img" id="categoryImage"
                    src={categoryData.imageUrl} alt="category-image" />
            </div>
            <div className="category-description-title">
                <h2 id="categoryTitle">{categoryData.name}</h2>
                <p id="categoryDes">
                    {categoryData.description}
                </p>
                <div className="statistics-row">
                    <button className="follow-button">Отслеживать</button>
                    <div className="category-viewers-row" aria-label="category-viewers">
                        <span>Зрителей:</span>
                        <span className="category-current-viewers" id="categoryAudience">{categoryData.audience}</span>
                    </div>
                    <div className="category-followers-row" aria-label="category-followers">
                        <span>Отслеживающих:</span>
                        <span className="category-current-followers" id="categoryFollowers">{categoryData.followers}</span>
                    </div>
                </div>
            </div>
        </>
    );
}