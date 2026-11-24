import { getElementByLang } from '../utils/langManager';

export default function Footer({ context }) {

    return (
        <>
            <footer className="site-footer" id="react-footer">
                <div className='footer-container'>
                    <div className="footer-legal">
                        <span> {getElementByLang("footer-legal-1", context.currentLang)} </span>
                        <span> {getElementByLang("footer-legal-2", context.currentLang)} </span>
                        <span> {getElementByLang("footer-legal-3", context.currentLang)} </span>
                        <span> {getElementByLang("footer-legal-4", context.currentLang)} </span>
                    </div>

                    <div className="footer-menu">
                        <a href="#">{getElementByLang("footer-menu-1", context.currentLang)} </a>
                        <a href="#">{getElementByLang("footer-menu-2", context.currentLang)} </a>
                        <a href="#">{getElementByLang("footer-menu-3", context.currentLang)} </a>
                        <a href="#">{getElementByLang("footer-menu-4", context.currentLang)} </a>
                        <a href="#">{getElementByLang("footer-menu-5", context.currentLang)} </a>
                    </div>
                    <hr className="horizontal-separator" />
                </div>
            </footer>
        </>
    );
}