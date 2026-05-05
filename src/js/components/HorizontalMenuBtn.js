export default function HorizontalMenuBtn({ data, activeId }) {

    return (
        <>
            <li key={data.id} className={`horizontal-menu-button${activeId===data.id ? '-active' : ''}`} >
                <a href={`./category.html?id=${data.id}`}>{data.shortName}</a>
            </li>
        </>
    )
}
