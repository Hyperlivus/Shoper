import React, {FC} from "react";
import {Box, SxProps} from "@mui/material";
import {mergeObjects} from "@/utils/logic/merge";


export type CardProps =  {
    sx ?: SxProps,
    children?: React.ReactNode,
}
const Card:FC<CardProps> = ({
    sx, children
})=>{

    const resSx = mergeObjects(sx, {
        padding : '10px',
        borderRadius : '5px',
        backgroundColor : 'background.default',
        boxShadow : '1',
    });


    return (
        <Box sx={resSx}>
            {children}
        </Box>
    )
}

export default Card;