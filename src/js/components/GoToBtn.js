import { getElementByLang } from '../utils/langManager';

export default function GoToBtn({ titleId, title, url, context }) {
    // Назад на главную
    const handleClick = () => {
        window.location.href = url || './index.html';
    }

    return (
        <>
            <div className="show-all-button-row">
                <button className="show-all-button" type="button"
                    onClick={handleClick}
                    aria-label={title || "Назад на главную"}>
                    {getElementByLang(titleId || "goToHomePage", context.currentLang) || title || "Назад на главную"}
                </button>
            </div>
        </>
    )
}