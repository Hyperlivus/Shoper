'use client'
import {createTheme} from "@mui/material";
import {Inter} from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
});

const theme = createTheme({
    palette : {
        mode : 'dark',
        background : {
            paper : '#121212',
            default : '#000',
        },
        primary : {
            main : '#0db759',
            contrastText : '#000',
        },
        text : {
            primary : '#fff',
            secondary: 'gray',
        }
    },
    typography : {
        fontFamily : inter.style.fontFamily,
        'h4' : {
            fontFamily : 'default',
            fontWeight : 'bold',
        },
        'h5' : {
            fontFamily : 'default',
        },
        'h6' : {
            fontFamily : 'default',
        }
    },

    components : {
        MuiTypography : {
            defaultProps : {
                sx : {
                    color : 'text.primary',
                }
            }
        },
        MuiButton: {
            defaultProps : {
                variant : 'contained',
                sx :{
                    color : 'primary.contrastText',
                }
            },
        },
        MuiTextField : {
            defaultProps : {
                variant : 'outlined',
            }
        },
        MuiStack : {
            defaultProps : {
                direction : 'row',
            }
        }
    }
});

export default theme;