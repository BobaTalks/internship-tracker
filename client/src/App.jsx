import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/poppins";

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
    brown: {
      lightest: "#FAF0E7",
      light: "#F2DAC4",
      dark: "#E0A878",
      darker: "#A4857B",
      darkest: "#683323",
    },
    gray: {
      lightest: "#FFFFFF",
      lighter: "#E4E2E0",
      light: "#8C8C8C",
      dark: "#D9D9D9",
      darker: "#021944",
      darkest: "#000000",
    },
    orange: {
      light: "#ED6A58",
      dark: "#CE230B",
    },
    blue: {
      dark: "#021944",
      light: "#0047FF",
      lighter: "#ABBFE3",
    },
    green: {
      light: "#73956F",
      dark: "#489879",
    },
    background: {
      paper: BRAND_COLORS.MILK_TEA,
      default: "#FAF0E7",
      blueberry: BRAND_COLORS.BLUEBERRY,
    },
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
      tertiary: "#FFFFFF",
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
