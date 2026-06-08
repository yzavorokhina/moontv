
export default function PromoCard({ streamData }) {


    return (
        <>
        <div key={streamData.stream.id} className="promo2">
            <div className="promo-stream-cover preview-image" alt="Превью">
                <a href={streamData.streamUrl}>
                    <img src={streamData.stream.bannerUrl} alt="stream prewiev" />
                </a>
            </div>
            <div className="promo-stream-info">
                <h6>{streamData.stream.title}</h6>
                <a href={streamData.streamUrl}>LuckyKhajiit</a>
            </div>
        </div>
        </>
    )
}