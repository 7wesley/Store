import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const DarkThemeProvider = ({ children }) => {
    //Grab from store
    const darkThemeEnabled = useSelector((state) => state.theme);

    return (
        <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
            {children}
        </ThemeProvider>
    );
};

export default DarkThemeProvider;