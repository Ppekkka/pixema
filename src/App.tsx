import { Provider, useSelector } from "react-redux";
import "./App.css";
import { themeSelectors } from "src/store/selectors/themeSelectors";
import { store } from "src/store";
import { createTheme } from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

function App() {
  const themeMode = useSelector(themeSelectors.getThemeMode);

  return (
    <Provider store={store}>
      <ThemeProvider theme={createTheme(themeMode)}>
        <Routes>
          <Route path='/'>

          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
