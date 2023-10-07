import { Provider, useSelector } from "react-redux";
import { themeSelectors } from "src/store/selectors/themeSelectors";
import { store } from "src/store";
import { createTheme } from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import TestPage from "src/client/pages/TestPage";

function App() {
  const themeMode = useSelector(themeSelectors.getThemeMode);

  return (
    <Provider store={store}>
      <ThemeProvider theme={createTheme(themeMode)}>
        <Routes>
          <Route path="/" element={<TestPage />}></Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
