import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid} from "@mui/material";
import {useRouter} from "next/router";


const Index = () => {
    const router = useRouter();

    return (
        <MainLayout>
            <Grid className='albums_list'>
                <Grid container justifyContent='space-between'>
                    <h1>Albums list</h1>
                    <Button variant="contained" size="medium" color="warning"
                            onClick={() => router.push('/tracks/create')}>Add track</Button>
                </Grid>
            </Grid>
        </MainLayout>
    );
};

export default Index;