import { createTheme, colors } from '@mui/material'

const theme = createTheme({
    palette: {
        custom: {
            blue: {
                main: colors.blue[900]
            },
            grey: {
                main: colors.grey[300]
            },
            black: {
                main: '#2e2e2e'
            },
            green: {
                main: colors.green[500]
            }
        },
        text: {
            primary: '#2e2e2e',
            secondary: colors.grey[300],
            tertiary: colors.green[500]
        }
    }
})

export default theme;