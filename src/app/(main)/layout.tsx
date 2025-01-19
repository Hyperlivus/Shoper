import React, {FC} from "react";
import {Box, Container} from "@mui/material";
import * as styles from "./layout.styles";
import Navbar from "@/components/layout/navbar/Navbar";

export type MainLayoutProps = {
    children: React.ReactNode;
}
const MainLayout:FC<MainLayoutProps>  = ({
    children,
})=>{

    return (
        <Box sx={styles.page}>
            <Navbar/>
            <Box sx={styles.content}>
                <Container>
                    {children}
                </Container>
            </Box>
        </Box>
    )
}

export default MainLayout;