export default function GoToBtn({ title, url }) {
    // Назад на главную
    const handleClick = () => {
        window.location.href = url || './index.html';
    }

    return (
        <>
            <div className="show-all-button-row">
                <button className="show-all-button" type="button"
                    onClick={handleClick}
                    aria-label={title || "Назад на главную"}>{title || "Назад на главную"}</button>
            </div>
        </>
    )
}