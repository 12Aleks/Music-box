import React, {FC, useState} from 'react';
import Navbar from "../components/Navbar";
import Container from '@mui/material/Container';

interface Layout {
    children: any;
}

const MainLayout: FC<Layout> = ({children}) => {

    return (
        <>
            <Navbar />
            <Container>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;