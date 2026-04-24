import Footer from "./Footer";
import Header from "./Header";
import HorizontalMenu from "./HorizontalMenu";
import VerticalMenu from "./VerticalMenu";
import Notification from "./Notification";

export default function Layout(props) {

    const showFooter = props.showFooter === undefined ? true : props.showFooter;
    const showHorizontalMenu = props.showHorizontalMenu === undefined ? true : props.showHorizontalMenu;
    const { db, children } = props;

    return (
        <>
        <div className="page">
            <Header />

            <main>
                <div className="vertical-blocks">
                    <VerticalMenu db={db} />
                    <div className="main-of-the-main">
                        <div className="horizontal-blocks">
                            <div className="main-screen-block">
                                {showHorizontalMenu &&
                                <HorizontalMenu db={db} />
                                }
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <Notification />
            </main>
            
            {showFooter &&
                <Footer />
            }
        </div>
        </>
    );
}