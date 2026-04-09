export default function GoToBtn({}) {

    const handleClick = () => {
        window.location.href='./index.html';
    }
    
    return (
        <>
            <div className="show-all-button-row">
                    <button className="show-all-button" type="button"
                         onClick={handleClick}
                        aria-label="Перейти в раздел всех категорий и жанров">Назад на главную</button>
                </div>
        </>
    )
}