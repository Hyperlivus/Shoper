import {SxProps, Theme} from "@mui/material";

export const container:SxProps<Theme> = {
    display : 'flex',
    flex : 'auto 1',
    gap: '20px',
    width : '100%',
}
export const button:SxProps<Theme> = {
    padding : '0px',
}
export const input:SxProps<Theme> = {
    flexGrow: '1',
    'input' : {
        padding : '10px',
    }
}