
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