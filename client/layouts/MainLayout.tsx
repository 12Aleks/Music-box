import React, {FC, useState} from 'react';
import Navbar from "../components/Navbar";
import Container from '@mui/material/Container';
import {styled} from "@mui/material";
import Player from "../components/Player";

interface Layout {
    children?: React.ReactNode;
}

const MainLayout: FC<Layout> = ({children}) => {
    const [open, setOpen] = useState<boolean>(true);

    return (
        <>
            <Navbar open={open} handleDrawerOpen={() => setOpen(!open)}/>
            <div  id='main' className={open && open ? 'open' : '' }>
                <Container >
                {children}
                </Container>

            </div>
            <Player open={open}/>
        </>
    );
};

export default MainLayout;