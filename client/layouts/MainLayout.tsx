import React, {FC} from 'react';
import Navbar from "../components/Navbar";

interface Layout{
    children: any;
}

const MainLayout: FC <Layout> = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
};

export default MainLayout;