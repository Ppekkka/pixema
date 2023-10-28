import { Provider, useSelector } from "react-redux";
import { store } from "src/store";
import { createTheme } from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Layout from "src/client/Layout/Layout";
import { clientRoutes } from "src/routes/clientRoutes";
import PrivateRoute from "src/routes/PrivateRoute";
import MainPage from "src/client/pages/MainPage/MainPage";
import { selectors } from "src/store/selectors/seelctors";

function App() {
  const themeMode = useSelector(selectors.getThemeMode);

  return (
    <Provider store={store}>
      <ThemeProvider theme={createTheme(themeMode)}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            {clientRoutes.map(({ id, path, Component, props, isPrivate }) => {
              return (
                <Route
                  key={id}
                  element={
                    isPrivate ? (
                      <PrivateRoute>
                        <Component {...props} />
                      </PrivateRoute>
                    ) : (
                      <Component {...props} />
                    )
                  }
                  path={path}
                />
              );
            })}
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
