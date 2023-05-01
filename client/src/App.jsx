import React, { Suspense, createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/poppins";

import theme from "./theme";

const withSuspense = (Component) => (
  <Suspense fallback="brewing...">
    <Component />
  </Suspense>
);

const HomePage = React.lazy(() => import("./pages/HomePage"));
const SearchResultsPage = React.lazy(() => import("./pages/SearchResultsPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

export const AuthContext = createContext([{}, () => {}]);

const App = () => {
  const [authUser, setAuthUser] = useState(null);
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path={"/"} element={withSuspense(HomePage)} />
            <Route path={"/search"} element={withSuspense(SearchResultsPage)} />
            <Route path={"/about"} element={withSuspense(AboutPage)} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
