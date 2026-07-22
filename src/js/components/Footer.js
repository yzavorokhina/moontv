
export default function Footer({ }) {

    return (
        <>
            <footer className="site-footer" id="react-footer">
                <div className='footer-container'>
                    {/* <p>12+ ©2025 ООО "VK Planets". <br> */}
                    <p> ©2025 ООО "Moon TV" <br />
                        Все права защищены. <br />
                        Все товарные знаки являются <br />
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
            </footer>
        </>
    );
}