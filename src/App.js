import React from "react";
import { useMobile } from "./mediaQueryUtils";
import MyFormDesktop from "./components/MyFormDesktop";
import MyFormMobile from "./components/MyFormMobile";

const App = () => (
    <React.Fragment>
        {useMobile() ?
            <MyFormMobile/>
            :
            <MyFormDesktop />
        }
    </React.Fragment>
);

export default App;
