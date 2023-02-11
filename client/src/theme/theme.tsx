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
    }
})

export default theme;