import React from "react";
import { DesktopLayout, MobileLayout } from "./mediaQueryUtils";
import MyFormDesktop from "./components/MyFormDesktop";
import MyFormMobile from "./components/MyFormMobile";

const App = () => (
    <React.Fragment>
        <DesktopLayout>
            <MyFormDesktop />
        </DesktopLayout>
        <MobileLayout>
            <MyFormMobile/>
        </MobileLayout>
    </React.Fragment>
);

export default App;
