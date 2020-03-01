import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";


const AppTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#C03736",
        },
        secondary: {
            main: "#4F1315",
        },
        tertiary: {
            main: "#C1D2D6",
        },
    },
    status: {
        danger: "orange",
    },
    typography: {
        fontFamily: [
            "Poppins",
            "Roboto",
            "sans-serif",
        ].join(","),
        useNextVariants: true,
    },

});

ReactDOM.render(
    <ThemeProvider theme={AppTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById("root"));
