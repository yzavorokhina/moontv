export default function Notification({ }) {

  /* A pop-up orange-row notification: */
  /* вариант 3 (более плавное исчезновение блока): */
  const handleClick = () => {
      const element = document.getElementById('my-element');
      element.classList.add('fade-out');
      // Удаляем элемент из потока после завершения анимации
      setTimeout(() => {
        element.style.display = 'none';
      }, 500);
  }

  return (
    <>
      <div className="notification" id="my-element">
        <img className="notification-moon-logo-1" src="./img/notification-moon-1.svg" alt="moon-logo" />
        <img className="notification-moon-logo-2" src="./img/notification-moon-2.svg" alt="moon-logo" />
        <img className="notification-moon-logo-3" src="./img/notification-moon-3.svg" alt="moon-logo" />
        <a href="/page" className="link-wrapper">
          <h4>Присоединяйтесь к сообществу межгалактических трансляций на Moon.tv!</h4>
        </a>
        <a href="/page" className="link-wrapper">
          <button type="button" className="button-notification">Войти / Регистрация</button>
        </a>
        <button id="closeButton" type="button" className="btn-close" aria-label="Close"></button>
      </div>
    </>
  );
}