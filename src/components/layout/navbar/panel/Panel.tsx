import {ElementType, FC} from "react";
import {IconButton, Stack, Tooltip} from "@mui/material";
import * as styles from "./panel.styles";

export type OptionProps = {
    id: string;
    placeholder?: string;
    icon: ElementType;
}
export type PanelProps = {
    options : OptionProps[];
};
const Panel:FC<PanelProps> = ({
    options
})=>{
    return (
        <Stack direction={'row'} gap={'10px'}>
            {
                options.map((option)=>{
                    const Icon = option.icon;
                    return (
                        <Tooltip key={option.id} title={option.placeholder}>
                            <IconButton color={'primary'}>
                                <Icon sx={styles.option}/>
                            </IconButton>
                        </Tooltip>
                    )
                })
            }
        </Stack>
    )
}

export default Panel;