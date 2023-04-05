import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
    interface Palette {
        // neutral: Palette['primary'];
        white: Palette["primary"];
    }

    interface PaletteOptions {
        // neutral?: PaletteOptions['primary'];
        white: PaletteOptions["primary"];
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsColorOverrides {
        // neutral: true;
        white: true
    }
}