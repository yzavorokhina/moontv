import Footer from "./Footer";
import Header from "./Header";
import HorizontalMenu from "./HorizontalMenu";
import VerticalMenu from "./VerticalMenu";

export default function Layout({ children }) {

    retrun (
        <>
        <div class="page">
            <div id="react-header" class="site-header">
                <Header />
            </div>

            <main>
                <div class="vertical-blocks">
                    <div class="vertical-menu-container">
                        <nav class="vertical-menu" id="vertical-menu">
                            <VerticalMenu />
                        </nav>
                    </div>
                    <div class="main-of-the-main">
                        <div class="horizontal-blocks">
                            <div class="main-screen-block">

                                <div id="react-horizontal-menu" class="horizontal-menu">
                                    <HorizontalMenu />
                                </div>

                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer class="site-footer" id="react-footer">
                <Footer />
            </footer>
        </div>
        </>
    );
}