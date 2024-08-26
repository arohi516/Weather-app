import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'inherit',
        h1: {
            fontSize: '2rem',
            fontWeight: 800,
        },
        h2: {
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'rgb(255, 255, 255, 0.7)',
        },
        h3: {
            fontSize: '1rem',
            fontWeight: 400,
            '@media (min-width:600px)': {
                fontWeight: 600,
            },
        },
        h4: {
            fontSize: '0.95rem',
            fontWeight: 500,
            letterSpacing: '1px',
            '@media (min-width:600px)': {
                letterSpacing: 0,
            },
            color: 'rgb(255, 255, 255, 0.7)',
        },
        h5: {
            fontSize: {
                xs: '8px',
                sm: '10px',
                md: '12px',
            },
            letterSpacing: {
                xs: '1px',
                sm: '0',
            },
            color: 'rgb(255, 255, 255)',
        },
    },
    spacing: 0,
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '18px',
                    color: 'rgb(255, 255, 255, 0.7)',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: 'linear-gradient(90deg, #004A8D 0%, #00072D 100%)',
                    margin: 0,
                    fontFamily: 'Poppins, Arial, sans-serif',
                    color: '#ffffff',
                    whiteSpace: 'nowrap !important',
                    height: '100%',
                    padding: '2.5rem 0.5rem',
                    '@media (min-width:600px)': {
                        padding: '2.5rem 2rem',
                    },
                },
                html: {
                    height: '100%',
                },
                '#root': {
                    height: '100%',
                },
            },
        },
    },
    customStyles: {
        whiteText: {
            color: '#FFFFFF',
        },
    },
});

export default theme;
