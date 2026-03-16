import * as streams from '../../db/streams.json';
import * as channels from '../../db/channels.json';
import * as categories from '../../db/categories.json';

export default function VerticalMenu({ showAll }) {

    const showItems = 11;

    

    const truncateByWords = (text, wordCount) => {
        const words = text.split(' ');
        if (words.length <= wordCount) {
            return text;
        }
        return words.slice(0, wordCount).join(' ') + '...';
    }

    function truncateByChars(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    }

    const renderCards = () => {
        let streamsFiltered = streams.filter(stream => !stream.promo);

        if (!showAll && streamsFiltered.length > showItems) {
            streamsFiltered = streamsFiltered.slice(0, showItems);
        }

        return streamsFiltered.map(stream => {
            const channel = channels.find(channel => channel.id === stream.channelId);
            const category = categories.find(category => category.id === stream.categoryId);

            return {
                stream,
                channel,
                category,
                streamUrl: "/dist/channel.html?id=" + stream.id,
                categoryUrl: "/dist/category.html?id=" + category.id,
            }
        });
    }

    return (
        <>
            <button className="vertical-menu-title">
                <h6>Рекомендуем</h6>
            </button>
           <ul>
            {renderCards().map(data => (
                <li key={data.channel.id}>
                    <div className="menu1">
                        <div className="menu-stream-cover">
                            <a href={data.streamUrl}>
                                <img src={data.channel.iconUrl}
                                    style={{width: 40 + 'px', height: 40 + 'px'}} alt="personal account" />
                            </a>
                        </div>
                        <div className="menu-stream-live-indicator">
                            <span style={{color: '#E2552D', fontSize: 6 + 'px'}}>&#11044;</span>
                        </div>
                        <div className="menu-stream-info">
                            <a href={data.streamUrl}><h6>{truncateByChars(data.channel.name, 12)}</h6></a>
                            <a href={data.categoryUrl} className="category-name">{truncateByWords(data.category.name, 3)}</a>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        </>
    )
}