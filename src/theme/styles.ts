import {GlobalStylesProps} from "@mui/material";

const globalStyles:GlobalStylesProps['styles'] = {
    '*, ::after, ::before' : {
        padding : '0',
        margin : '0',
        boxSizing: 'border-box',
    }
}
export default globalStyles;