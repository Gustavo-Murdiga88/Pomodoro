import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import { CyclesContextProvider } from "./context/taskContext";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
