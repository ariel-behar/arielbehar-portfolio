import { ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme {}

    interface ThemeOptions {}

    interface Palette {
        custom: {
            blue: {
                main: string | PaletteColor
            },
            grey: {
                main: string | PaletteColor
            },
            black: {
                main: string | PaletteColor
            }, 
            green: {
                main: string | PaletteColor
            },
            chip: {
                green: string | PaletteColor,
                yellow: string | PaletteColor,
                blue:string | PaletteColor
            }
        },
        text: {
            tertiary: PaletteColor,
            muted: string
        }
    }

    interface PaletteOptions {
        custom: {
            blue: PaletteColorOptions,
            grey: PaletteColorOptions,
            black: PaletteColorOptions,
            green: PaletteColorOptions,
            chip: {
                green: PaletteColorOptions,
                yellow: PaletteColorOptions,
                blue:PaletteColorOptions
            }
        },
        
        text: {
            tertiary: PaletteColorOptions,
            muted: PaletteColorOptions
        }
    }

    interface TypeText {
        tertiary: PaletteColorOptions,
        muted: PaletteColorOptions
    }

}