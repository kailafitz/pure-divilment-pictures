import * as createPalette from '@mui/material/styles/createPalette';
// https://stackoverflow.com/questions/46486565/mui-customize-button-color

declare module '@mui/material/styles' {
    interface Palette {
        // neutral: Palette['primary'];
        white: Palette["primary"];
        dark: Palette["primary"];
    }

    interface PaletteOptions {
        // neutral?: PaletteOptions['primary'];
        white: PaletteOptions["primary"];
        dark: PaletteOptions["primary"];
    }

    interface CommonColors {
        white: string;
        dark: string;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsColorOverrides {
        // neutral: true;
        white: true;
        dark: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        dark: true;
    }
}