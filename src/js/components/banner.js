
export default function Banner({ db, showAll }) {

  return (
        <>
          <div className="video-carousel">
              <button className="carousel-btn prev-btn" aria-label="Предыдущее видео">
                  {/* <!-- License: MIT. Made by Shopify: https://github.com/Shopify/polaris --> */}
                  <svg className="carousel-arrow" width="40px" height="40px" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M17 9H5.414l3.293-3.293a.999.999 0 10-1.414-1.414l-5 5a.999.999 0 000 1.414l5 5a.997.997 0 001.414 0 .999.999 0 000-1.414L5.414 11H17a1 1 0 100-2z"
                          fill="#FFFFFF" />
                  </svg>
              </button>
              {/* <!-- Область просмотра видео --> */}
              {/* <!-- <div className="video-container">
                      <video className="current-video" controls>
                      <source src="video1.mp4" type="video/mp4"> --> */}
              <iframe width="1138px" height="574px"
                  src="https://www.youtube.com/embed/jfKfPfyJRdk?si=eavHTgCuUL64LPPd"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              {/* <!-- </video>
              </div> --> */}
              <button className="carousel-btn next-btn" aria-label="Следующее видео">
                  {/* <!-- License: MIT. Made by Shopify: https://github.com/Shopify/polaris --> */}
                  <svg className="carousel-arrow" width="40px" height="40px" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                          fill="#FFFFFF" />
                  </svg>
              </button>
              <div className="banner-info">
                  <div className="banner-stream-info">
                      <div className="banner-ava">
                          <a href="./channel.html">
                              <img src="./images/banner-ava.jpg" alt="banner ava"/>
                          </a>
                      </div>
                      <div className="stream-info">
                          <h5>Разрабатываю игру KUPOL : выращивание фруктовых деревьев на Луне</h5>
                          <h5>День 4 / Основная концепция</h5>
                          <a href="./channel.html">neuro_activate</a>
                      </div>
                  </div>
                  <div className="stream-statistic">
                      <div className="live-watchers">
                          <h5>В эфире</h5>
                          <span>&#11044;</span>

                          <div className="viewer-count">
                              <span id="current-viewers">323</span>
                          </div>
                      </div>
                      <div className="age-rating-row">
                          <span className="age-rating">12+</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="promo">
              <div className="promo1">
                  <div className="promo-stream-cover">
                      <a href="./channel.html">
                          <img src="./images/banner-stream-prewiev-1.jpg" alt="stream prewiev" />
                      </a>
                  </div>
                  <div className="promo-stream-info">
                      <h6>Разрабатываю игру KUPOL
                          День 4 / Основная концепция</h6>
                      <a href="./channel.html">neuro_activate</a>
                  </div>
              </div>
              <div className="promo2">
                  <div className="promo-stream-cover">
                      <a href="./channel.html">
                          <img src="./images/banner-stream-prewiev-2.jpg" alt="stream prewiev" />
                      </a>
                  </div>
                  <div className="promo-stream-info">
                      <h6>Skyrim-прокачка до 17 уровня
                          и обратно до 1-го...</h6>
                      <a href="./channel.html">LuckyKhajiit</a>
                  </div>
              </div>
              <div className="promo3">
                  <div className="promo-stream-cover">
                      <a href="./channel.html">
                          <img src="./images/banner-stream-prewiev-3.jpg" alt="stream prewiev" />
                      </a>
                  </div>
                  <div className="promo-stream-info">
                      <h6>Смешарики 3 часа подряд -
                          Часть 1-ая из 10-ти</h6>
                      <a href="./channel.html">MultiPupsik</a>
                  </div>
              </div>
              <div className="promo4">
                  <div className="promo-stream-cover">
                      <a href="./channel.html">
                          <img src="./images/banner-stream-prewiev-4.jpg" alt="stream prewiev" />
                      </a>
                  </div>
                  <div className="promo-stream-info">
                      <h6>Крутой замес. Делаем рыбок
                          из марсианской глины</h6>
                      <a href="./channel.html">KidsPlanet</a>
                  </div>
              </div>
              <div className="promo5">
                  <div className="promo-stream-cover">
                      <a href="./channel.html">
                          <img src="./images/banner-stream-prewiev-5.jpg" alt="stream prewiev" />
                      </a>
                  </div>
                  <div className="promo-stream-info">
                      <h6>PROграммирование для будущего </h6>
                      <a href="./channel.html">Programming </a>
                  </div>
              </div>
          </div>
        </>
  );
}

// document.addEventListener('DOMContentLoaded', function() {
//   const prevBtn = document.querySelector('.prev-btn');
//   const nextBtn = document.querySelector('.next-btn');
//   const videoElement = document.querySelector('.current-video');

//   // Массив с путями к видео
//   const videos = [
//     'video1.mp4',
//     'video2.mp4',
//     'video3.mp4'
//   ];

//   let currentIndex = 0;

//   function loadVideo(index) {
//     const videoSrc = videos[index];
//     videoElement.src = videoSrc;
//     videoElement.load();
//   }

//   prevBtn.addEventListener('click', function() {
//     currentIndex = (currentIndex - 1 + videos.length) % videos.length;
//     loadVideo(currentIndex);
//   });

//   nextBtn.addEventListener('click', function() {
//     currentIndex = (currentIndex + 1) % videos.length;
//     loadVideo(currentIndex);
//   });

//   // Загружаем первое видео при инициализации
//   loadVideo(currentIndex);
// });

/* Автопрокрутка (может и не нужна, чтобы не мельтешила перед глазами главная трансляция века: если есть кнопки перелистывания тем более */
// setInterval(() => {
//   nextBtn.click();
// }, 5000); // каждые 5 секунд