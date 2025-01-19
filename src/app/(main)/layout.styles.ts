import {SxProps, Theme} from "@mui/material";

export const page:SxProps<Theme> = {
    display : 'flex',
    flexDirection : 'column',
    width : '100%',
    minHeight : '100vh',
    backgroundColor : 'background.default',
    flex : 'auto 1',
}
export const content:SxProps<Theme> = {
    display : 'flex',
    flexDirection : 'column',
    alignItems: 'center',
    width : '100%',
    flexGrow : 1,
}