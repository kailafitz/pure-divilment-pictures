import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// const { palette } = createTheme();
// const { augmentColor } = palette;
// const createColor = (mainColor: any) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans",
    copyright: {
      fontSize: "9px",
      fontFamily: "DM Sans",
    },
    h1: {
      fontSize: "3.4rem",
    },
  },
  palette: {
    primary: {
      light: "#3c3c3c",
      main: "#0d0c0c",
      dark: "#000000",
      contrastText: "#f9f9f9",
    },
    white: {
      main: "#f9f9f9",
      dark: "#c9c9c9",
      contrastText: "#000000",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          fontFamily: "DM Sans",
          borderRadius: "0px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "DM Sans",
          textDecoration: "none",
        },
      },
    },
  },
});

export const responsiveTheme = responsiveFontSizes(theme);
