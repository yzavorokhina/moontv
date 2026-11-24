import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import HorizontalMenu from "./HorizontalMenu";
import VerticalMenu from "./VerticalMenu";
import Notification from "./Notification";

export default function Layout(props) {

    const showFooter = props.showFooter === undefined ? true : props.showFooter;
    const showHorizontalMenu = props.showHorizontalMenu === undefined ? true : props.showHorizontalMenu;
    const { db, children, pageId, context } = props;
    const { currentTheme, setTheme, currentLang, setLang } = context;

    return (
        <>
            <div className="page">
                <Header currentTheme={currentTheme} setTheme={setTheme} currentLang={currentLang} setLang={setLang} />

                <main>
                    <div className="vertical-blocks">
                        <VerticalMenu db={db} context={context} />
                        <div className="main-of-the-main">
                            <div className="horizontal-blocks">
                                <div className="main-screen-block">
                                    {showHorizontalMenu &&
                                        <HorizontalMenu db={db} currentTheme={currentTheme} currentLang={currentLang} pageId={pageId} />
                                    }
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Notification />
                </main>
                {showFooter &&
                    <Footer context={context} />
                }
            </div>
        </>
    );
}