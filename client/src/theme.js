import { createTheme, responsiveFontSizes } from '@mui/material';

const COLORS = {
  HYPERLINK_BLUE: '#005EA2',
  BODY_TEXT: '#2F3032',
  LIGHT_GREY_TEXT: '#78787A',
  BACKGROUND: '#FAF0E7',
  CARD_BG: '#FFFFFF',
  NAVBAR_BG: '#F2DAC4',
  BLUEBERRY: '#021944',
  LYCHEE: '#F6A794',
  CARD_CHIPS: '#ABBFE3',
  ERROR_BUTTON: '#D21C1C',
  ERROR_BG: '#F8D7D7',
  SLIDEOUT_NOTES_BG: '#FFF5ED',
  THAI_TEA: '#E0A878',
  MILK_TEA: '#F2DAC4',
  LOGO_BROWN: '#98513A',
  OFFWHITE_GREY: '#D9D9D9',
  PAGINATION_BG: '#F9E5DC',
  SEARCHBAR_ICON_BORDER: '#DBAE9C',
  THAI_FILL_INACTIVE: '#B4AAA0',
  BOBA_POSITION: '#A9917B',
  SLIDEOUT_SUBTEXT: '#E1D4C8',
  MENTORS_BG: '#FFFDFB',
  LINKEDIN_ICON: '#377DB6',
};

let theme = createTheme({
  palette: {
    primary: {
      main: COLORS.LYCHEE,
      light: COLORS.PAGINATION_BG,
      dark: COLORS.SEARCHBAR_ICON_BORDER,
    },
    secondary: {
      main: COLORS.BLUEBERRY,
      light: COLORS.CARD_CHIPS,
      dark: COLORS.HYPERLINK_BLUE,
    },
    tertiary: {
      main: COLORS.THAI_TEA,
      light: COLORS.MILK_TEA,
      dark: COLORS.LOGO_BROWN,
      contrastText: COLORS.BOBA_POSITION,
    },
    text: {
      main: COLORS.BODY_TEXT,
      light: COLORS.LIGHT_GREY_TEXT,
      dark: COLORS.THAI_FILL_INACTIVE,
      underline: COLORS.SLIDEOUT_SUBTEXT,
    },
    background: {
      main: COLORS.BACKGROUND,
      light: COLORS.SLIDEOUT_NOTES_BG,
      dark: COLORS.NAVBAR_BG,
    },
    error: {
      main: COLORS.ERROR_BUTTON,
      light: COLORS.ERROR_BG,
    },
    grey: {
      main: COLORS.CARD_BG,
      dark: COLORS.OFFWHITE_GREY,
      light: COLORS.MENTORS_BG,
    },
    icons: {
      linkedin: COLORS.LINKEDIN_ICON,
    },
  },
  typography: {
    color: COLORS.BODY_TEXT,
    fontFamily: 'Poppins',
    h1: { fontWeight: 'bold', fontSize: '4.5rem' },
    h2: { fontWeight: 'bold', fontSize: '3.5rem' },
    h3: { fontWeight: 'bold', fontSize: '3rem' },
    h4: { fontWeight: 'bold', fontSize: '2rem' },
    h5: { fontWeight: 'bold', fontSize: '1.5rem' },
    h6: { fontWeight: 'bold', fontSize: '1rem' },
    title: { fontWeight: '600', fontSize: '3.5rem', lineHeight: '5.5rem' },
    pageTitle: { fontWeight: '600', fontSize: '2rem' },
    errorMessage: { fontWeight: '600', fontSize: '1rem' },
    subtitle: { fontSize: '1.125rem' },
    body1: { fontSize: '1.125rem' },
    navText: {
      fontSize: '.8rem',
      fontWeight: 600,
      textTransform: 'none',
    },
    memberName: {
      fontWeight: 600,
      textAlign: 'center',
      maxWidth: '80%',
      fontSize: '1.3vw',
      marginTop: '5%',
    },
    memberPronouns: {
      fontWeight: 600,
      fontSize: '0.9vw',
    },
    memberPosition: {
      fontWeight: 600,
      fontSize: '1.1vw',
      marginTop: '4%',
      maxWidth: '80%',
      textAlign: 'center',
    },
    aboutBody: {
      fontSize: '0.9rem',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        },
      },
      defaultProps: {
        color: COLORS.BODY_TEXT,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: COLORS.HYPERLINK_BLUE,
          textDecorationColor: COLORS.HYPERLINK_BLUE,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'transparent' },
          style: {
            fontSize: '.9rem',
            textTransform: 'none',
            background: 'none',
            borderRadius: '20px',
          },
        },
        {
          props: { variant: 'rounded', color: 'primary' },
          style: {
            textTransform: 'none',
            fontSize: '.9rem',
            borderRadius: '20px',
            backgroundColor: COLORS.LYCHEE,
            color: COLORS.BLUEBERRY,
            '&:hover': {
              backgroundColor: COLORS.LYCHEE,
              boxShadow:
                '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
            },
          },
        },
        {
          props: { variant: 'rounded', color: 'thai' },
          style: {
            textTransform: 'none',
            fontSize: '1rem',
            borderRadius: '20px',
            backgroundColor: COLORS.LOGO_BROWN,
            margin: '.4rem 0rem',
            color: COLORS.CARD_BG,
            '&:hover': {
              backgroundColor: COLORS.LOGO_BROWN,
              boxShadow:
                '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '2rem',
          borderRadius: '2rem',
        },
      },
      defaultProps: {
        elevation: 2,
      },
    },
  },
  spacing: 4,
});

theme = responsiveFontSizes(theme);

export default theme;
