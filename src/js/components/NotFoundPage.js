export default function NotFoundPage() {

    setTimeout(() => {
        window.location.href = './index.html';
    }, 5000);

    const handleClick = () => {
        window.location.href = './index.html';
    }

    return (
        <>
            <div class="wrapper">
                <div class="container">
                    <div class="numbers">
                        <div class="four">
                            <div id="page1"></div>
                            <div id="page2"></div>
                            <div id="page3"></div>
                            <div id="page4"></div>
                            <div id="page5"></div>
                            <div id="page6"></div>
                            <div id="page7"></div>
                            <div id="page8"></div>
                            <div id="page9"></div>
                        </div>
                        <div class="zero">
                            <div id="zero1"></div>
                            <div id="zero2"></div>
                            <div id="zero3"></div>
                            <div id="zero4"></div>
                            <div id="zero5"></div>
                            <div id="zero6"></div>
                            <div id="zero7"></div>
                            <div id="zero8"></div>
                            <div id="zero9"></div>
                            <div id="zero10"></div>
                            <div id="zero11"></div>
                            <div id="zero12"></div>
                        </div>
                        <div class="fourAgain">
                            <div id="four1"></div>
                            <div id="four2"></div>
                            <div id="four3"></div>
                            <div id="four4"></div>
                            <div id="four5"></div>
                            <div id="four6"></div>
                            <div id="four7"></div>
                            <div id="four8"></div>
                            <div id="four9"></div>
                        </div>
                        {/* <span class="number">4</span>
                        <span class="number">0</span>
                        <span class="number">4</span> */}
                    </div>
                    <div class="emoji">
                        <div role="img" aria-hidden="true" class="error-emoji"> \(o_o)/
                        </div>
                        <div class="error-text gf-title-medium">
                            {/* <div>Can't find any pages.</div>  */}
                            <div>Не могу найти ни одной страницы.</div>
                        </div>
                    </div>
                </div>
                {/* <div class="error-message">PAGE NOT FOUND</div> */}
                <div class="error-message">СТРАНИЦА НЕ НАЙДЕНА</div>
                <button type="button" onClick={handleClick} class="goto-home-page-button">Перейти на главную</button>
            </div>
        </>
    )
}