import { createTheme } from "@mui/material";

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
      50: "#FAF0E7",
      100: BRAND_COLORS.MILK_TEA,
      200: "#E0A878",
      300: "#A4857B",
      400: "#98513A",
      500: "#683323",
    },
    gray: {
      50: "#FFFFFF",
      100: "#F7EDEA",
      200: "#E4E2E0",
      300: "#8C8C8C",
      400: "#E7D8CE",
      500: "#D9D9D9",
      600: "#B4AAA0",
      700: "#979797",
      800: "#2F3032",
      900: "#000000",
    },
    red: {
      50: "#F8D7D7",
      100: "#F4D0BD",
      200: "#E2BCA9",
      300: "#F6A794",
      400: "#D21C1C",
      500: "#B03737",
    },
    blue: {
      50: "#ABBFE3",
      100: "#005EA2",
      200: "#021944",
    },
    green: {
      50: "#73956F",
      100: "#489879",
    },
  },
  typography: {
    color: "#2F3032",
    fontFamily: "Poppins",
    h1: { fontWeight: "bold", fontSize: "4.5rem" },
    h2: { fontWeight: "bold", fontSize: "3.5rem" },
    h3: { fontWeight: "bold", fontSize: "3rem" },
    h4: { fontWeight: "bold", fontSize: "2rem" },
    h5: { fontWeight: "bold", fontSize: "1.5rem" },
    h6: { fontWeight: "bold", fontSize: "1rem" },
    title: { fontWeight: "600", fontSize: "3.5rem", lineHeight: "5.5rem" },
    pageTitle: { fontWeight: "600", fontSize: "2rem" },
    subtitle: { fontSize: "1.125rem" },
    body1: { fontSize: "1.125rem" },
    body2: { fontSize: "1.125rem", color: "#C4C4C4" },
    navText: {
      fontSize: ".8rem",
      fontWeight: 600,
      color: "#2F3032",
      textTransform: "none",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "transparent" },
          style: {
            fontSize: ".9rem",
            textTransform: "none",
            background: "none",
            borderRadius: "20px",
          },
        },
        {
          props: { variant: "rounded", color: "primary" },
          style: {
            textTransform: "none",
            fontSize: ".9rem",
            borderRadius: "20px",
            backgroundColor: "#F6A794",
            color: "#021944",
            "&:hover": {
              backgroundColor: "#F6A794",
              boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            },
          },
        },
        {
          props: { variant: "rounded", color: "thai" },
          style: {
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: "20px",
            backgroundColor: "#98513A",
            margin: ".4rem 0rem",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#98513A",
              boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            },
          },
        },
      ],
    },
  },
});

export default theme;
