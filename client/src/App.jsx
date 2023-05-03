import React, { Suspense } from "react";
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
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={withSuspense(HomePage)} />
          <Route path="/search" element={withSuspense(SearchResultsPage)} />
          <Route path="*" element={withSuspense(ErrorPage)} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
