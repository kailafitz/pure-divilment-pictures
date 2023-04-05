import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans",
    copyright: {
      fontSize: "9px",
      fontFamily: "DM Sans",
    },
  },
  palette: {
    white: {
      main: "#ffffff",
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
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "DM Sans",
        },
      },
    },
  },
});

export const responsiveTheme = responsiveFontSizes(theme);
