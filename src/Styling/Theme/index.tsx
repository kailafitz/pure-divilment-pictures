import { common } from "@mui/material/colors";
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
    primary: {
      main: common.black,
    },
    white: {
      main: common.white,
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
