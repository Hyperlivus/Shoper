import {SxProps, Theme} from "@mui/material";

export const container:SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding : '10px',

    backgroundColor: 'background.paper',
}
export const content:SxProps<Theme> = {
    display : 'flex',
    gap : '45px',
    alignItems: 'center',
}
export const searchContainer:SxProps<Theme> = {
    flexGrow: '1',
}