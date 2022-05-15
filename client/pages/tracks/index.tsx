import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Grid, Card} from "@mui/material";

const Index = () => {
    return (
        <MainLayout>
            <Grid container>
               <Card>
                   <Grid>
                       <h1>Track list</h1>
                   </Grid>
               </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;