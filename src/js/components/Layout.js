import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import HorizontalMenu from "./HorizontalMenu";
import VerticalMenu from "./VerticalMenu";
import Notification from "./Notification";
import { defaultTheme } from '../utils/themeManager';

export default function Layout(props) {

    const showFooter = props.showFooter === undefined ? true : props.showFooter;
    const showHorizontalMenu = props.showHorizontalMenu === undefined ? true : props.showHorizontalMenu;
    const { db, children } = props;
    const defaultThemeValue = defaultTheme;
    const [currentTheme, setTheme] = useState(defaultThemeValue);

    return (
        <>
        <div className="page">
            <Header currentTheme={currentTheme} setTheme={setTheme} />

            <main>
                <div className="vertical-blocks">
                    <VerticalMenu db={db} />
                    <div className="main-of-the-main">
                        <div className="horizontal-blocks">
                            <div className="main-screen-block">
                                {showHorizontalMenu &&
                                <HorizontalMenu db={db} currentTheme={currentTheme}/>
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