
export default function PromoCard({ streamData, setCurrentSlide }) {


    const updateSlide = (id) => {
        setCurrentSlide(id);

    }

    return (
        <>
            <div key={streamData.stream.id} className="promo-stream" onClick={(e) => { updateSlide(streamData.slideId, e) }}>
                <div className="promo-stream-cover preview-image" alt="Превью">
                    <img src={streamData.stream.bannerUrl} alt="stream prewiev" />
                </div>
                <div className="promo-stream-info">
                    <h6>{streamData.stream.title}</h6>
                    <a href={streamData.streamUrl}>{streamData.channel?.name}</a>
                </div>
            </div>
        </>
    )
}