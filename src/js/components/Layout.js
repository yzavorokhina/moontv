import Footer from "./Footer";
import Header from "./Header";
import HorizontalMenu from "./HorizontalMenu";
import VerticalMenu from "./VerticalMenu";
import Notification from "./Notification";

export default function Layout(props) {

    const showFooter = props.showFooter === undefined ? true : props.showFooter;
    const { db, children } = props;

    return (
        <>
        <div className="page">
            <div id="react-header" className="site-header">
                <Header />
            </div>

            <main>
                <div className="vertical-blocks">
                    <div className="vertical-menu-container">
                        <nav className="vertical-menu" id="vertical-menu">
                            <VerticalMenu db={db} />
                        </nav>
                    </div>
                    <div className="main-of-the-main">
                        <div className="horizontal-blocks">
                            <div className="main-screen-block">
                                    <HorizontalMenu db={db} />
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <Notification />
            </main>
            {showFooter &&
            <footer className="site-footer" id="react-footer">
                <Footer />
            </footer>
            }
        </div>
        </>
    );
}