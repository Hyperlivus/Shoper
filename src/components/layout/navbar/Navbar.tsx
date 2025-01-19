import {FC} from "react";
import * as styles from "./navbar.styles";
import {Box, Container} from "@mui/material";
import Logo from "@/components/styled/logo/Logo";
import Panel from "@/components/layout/navbar/panel/Panel";
import {PanelOptions} from "@/components/layout/navbar/options";
import SearchPanel from "@/components/layout/navbar/search/SearchPanel";


const Navbar:FC = ()=>{
    return (
        <Box sx={styles.container}>
            <Container sx={styles.content}>
                <Logo/>
                <Box sx={styles.searchContainer}>
                    <SearchPanel/>
                </Box>
                <Panel options={PanelOptions}/>
            </Container>
        </Box>
    )
}
export default Navbar;