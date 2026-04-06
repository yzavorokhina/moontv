import React, { useEffect } from 'react';

export default function Footer({}) {

    const scrollFunction = () => {
        // Показываем кнопку, если проскроллили больше 20 px
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            buttonUp.style.display = "block";
        } else {
            // Скрываем, если вернулись наверх
            buttonUp.style.display = "none";
        }
    }

     useEffect(() => {
        // Получаем кнопку по ID
        var buttonUp = document.getElementById("buttonUp");
        // Обработчик скролла: показываем/скрываем кнопку
        window.onscroll = function () { scrollFunction() };
    }, []);

    const handleClick = () => {
         window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

  return (
        <>
            <div className="buttonUp buttonUp_hide">
                <button id="buttonUp" onClick={handleClick}></button>
            </div>
            <div className='footer-container'>
                {/* <p>12+ ©2025 ООО "VK Planets". <br> */}
                <p> ©2025 ООО "Moon TV" <br/>
                    Все права защищены. <br/>
                    Все товарные знаки являются <br/>
                    собственностью их владельцев.
                </p>
                <div className="footer-menu">
                    <a href="#">Пользовательское соглашение</a>
                    <a href="#">Политика конфиденциальности</a>
                    <a href="#">Рекомендательные технологии</a>
                    <a href="#">Информация о компании</a>
                    <a href="#">Техническая поддержка </a>
                </div>
                <hr className="horizontal-separator" />
            </div>
        </>
  );
}