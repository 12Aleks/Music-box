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

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
        open?: boolean;
    }>(({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${0}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }));


    return (
        <>
            <Navbar open={open} handleDrawerOpen={() => setOpen(!open)}/>
            <Main open={open} className={open && open ? 'open' : '' }>
                <Container >
                {children}
                </Container>

            </Main>
            <Player open={open}/>
        </>
    );
};

export default MainLayout;