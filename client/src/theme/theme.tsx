import { createTheme, colors } from '@mui/material'

const theme = createTheme({
    palette: {
        custom: {
            blue: {
                main: colors.blue[900]
            },
            grey: {
                main: colors.grey[300],
                darker: '#9e9e9e',
            },
            black: {
                main: '#2e2e2e'
            },
            green: {
                main: colors.green[500]
            },
            chip: {
                green: "#419745",
                yellow: "#fdeb50",
                blue: "#2f85db"
            }
        },
        text: {
            primary: '#2e2e2e',
            secondary: colors.grey[300],
            tertiary: colors.green[500],
            muted: {
                main: "#636c72",
                light: "#9e9e9e"
            }

        },
        action: {
            disabled: "rgb(255, 255, 255, 0.5)",
            disabledBackground: "rgb(13, 71, 161,0.5)",
            disabledOpacity: 0.5
        }
    },
    typography: {
        fontFamily: "'Saira', sans-serif"
    }
})

theme.typography.h1 = {
    fontSize: '3rem',
    lineHeight: '3.1rem',
    fontWeight: 'normal',
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
        lineHeight: '3.1rem',
    },
}

theme.typography.h2 = {
    fontSize: '2.2rem',
    lineHeight: '2.3rem',
    fontWeight: 'normal',
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
        lineHeight: '2.6rem',
    },
}

theme.typography.h3 = {
    fontSize: '2rem',
    lineHeight: '2.1rem',
    fontWeight: 'normal',
    [theme.breakpoints.up('md')]: {
        fontSize: '2.2rem',
        lineHeight: '2.3rem',
    },
}

theme.typography.h4 = {
    fontSize: '1.7rem',
    lineHeight: '1.8rem',
    fontWeight: 'normal',
    [theme.breakpoints.up('md')]: {
        fontSize: '1.9rem',
        lineHeight: '2rem',
    },
}

theme.typography.h5 = {
    fontSize: '1.5rem',
    lineHeight: '1.6rem',
    fontWeight: 'normal',
    [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
        lineHeight: '1.7rem',
    },
}

theme.typography.h6 = {
    fontSize: '1.3rem',
    lineHeight: '1.4rem',
    fontWeight: 'normal',
    [theme.breakpoints.up('md')]: {
        fontSize: '1.4rem',
        lineHeight: '1.5rem',
    },
}


export default theme;