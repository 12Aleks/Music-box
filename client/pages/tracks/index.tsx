import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Grid, Card, Button, Box} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/treck";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        { "_id": "627d10b9c0fa2d18f96b3330",
            "name": "Track The King and the Jester",
            "text": "Test text",
            "listens": 3,
            "picture": "picture/60168698-391a-43ed-8196-c26eafb7a773.jpg",
            "audio": "audio/0278a983-e1a5-4f87-bb7e-420db57b2914.mp3",
            "comments": [],
        },
        {
            "_id": "627d5037514a04d61ba4433c",
            "name": "Track The King and the Jester",
            "text": "Test text",
            "picture": "image/4cb9ad9a-9c94-4f4d-b982-8c23360d2c75.jpg",
            "audio": "audio/3f776ce2-91d7-4383-b235-b776f20fd503.mp3",
            "comments": [],
        }
    ];

    return (
        <MainLayout>
            <Grid container className='tracks_list'>
                   <Grid container justifyContent='space-between'>
                       <h1>Track list</h1>
                       <Button variant="outlined" color="info" onClick={() => router.push('/tracks/create')}>Add track</Button>
                   </Grid>
                   <TrackList tracks={tracks}/>
            </Grid>
        </MainLayout>
    );
};

export default Index;