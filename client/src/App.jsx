import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const withSuspense = (Component) => (
  <Suspense fallback="brewing...">
    <Component />
  </Suspense>
);

const HomePage = React.lazy(() => import("./pages/HomePage"));

// TODO: Add brand colors map
// eslint-disable-next-line
const BRAND_COLORS = {
  BLUEBERRY: "#021944",
  LYCHEE: "#F6A794",
  MATCHA: "#B1D5B2",
  MILK_TEA: "#F2DAC4",
  TARO: "#E4CFF7",
  THAI_TEA: "#E0A878",
};

const theme = createTheme({
  palette: {
    background: { paper: BRAND_COLORS.MILK_TEA, default: "#FAF0E7" },
    success: {
      main: "#489878",
    },
    error: {
      main: "#D21C1C",
    },
    info: {
      main: "#005EA2",
    },
    warning: {
      main: "#F9971E",
    },
    text: {
      primary: "#2F3032",
      secondary: "#C4C4C4",
    },
  },
  fontsize: "16px",
  typography: {
    color: "#2F3032",
    fontFamily: "Poppins",
    h1: { fontWeight: "bold", fontSize: "4.5rem" },
    h2: { fontWeight: "bold", fontSize: "3.5rem" },
    h3: { fontWeight: "bold", fontSize: "3rem" },
    h4: { fontWeight: "bold", fontSize: "2rem" },
    h5: { fontWeight: "bold", fontSize: "1.5rem" },
    h6: { fontWeight: "bold", fontSize: "1rem" },
    body1: { fontSize: "1.125rem" },
    body2: { fontSize: "1.125rem", color: "#C4C4C4" },
    title: { fontWeight: "500", fontSize: "4.5rem", lineHeight: "5.5rem" },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={"/"} element={withSuspense(HomePage)} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
