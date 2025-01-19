import {FC} from "react";
import * as styles from './search-panel.styles';
import {Box, Button, Stack, TextField} from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';

const SearchPanel:FC = ()=>{
    return (
        <Box sx={styles.container}>
            <Button>
                <Stack  alignItems={'center'} gap={'10px'}>
                    <CategoryIcon/>
                    Catalog
                </Stack>
            </Button>
            <TextField
                sx={styles.input}
                placeholder={'Search...'}
            />
        </Box>
    )
}

export default SearchPanel;