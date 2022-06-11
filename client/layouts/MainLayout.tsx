import React, {FC, useState} from 'react';
import Navbar from "../components/Navbar";
import Container from '@mui/material/Container';
import Player from "../components/Player";
import Head from 'next/head'


interface Layout {
    children?: React.ReactNode;
    title? : string,
    description? : string,
    keywords?: string | undefined
}

const MainLayout: FC<Layout> = ({children, title, description,keywords}) => {
    const [open, setOpen] = useState<boolean>(true);

    return (
        <>
        <Head>
            <title>
                {title || "Music box"}
            </title>
            <meta name="description" content={"Music box" + description}/>
            <meta name="robots" content="index, follow"/>
            <meta name="keywords" content={keywords || 'Music, box, track'}/>
            <meta name="viewport" content='width=device-width, initial-scale=1'/>
        </Head>
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