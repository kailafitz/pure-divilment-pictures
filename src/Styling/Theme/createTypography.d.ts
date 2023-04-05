import * as createPalette from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        copyright: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        copyright?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        copyright: true;
    }
}