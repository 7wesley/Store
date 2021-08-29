import Routing from './Routing';
import styled from "styled-components";
import theme from "styled-theming";
import DarkThemeProvider from "./DarkThemeProvider";

export const backgroundColor = theme("theme", {
    light: "#fff",
    dark: "#2d2d2d",
});

export const textColor = theme("theme", {
    light: "#000",
    dark: "#fff",
});

const AppContainer = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
`;

const App = () => {
    
  return (
    <DarkThemeProvider theme={{theme: "dark"}}>
        <AppContainer>
            <Routing />
        </AppContainer>
    </DarkThemeProvider>
  );
}

export default App;