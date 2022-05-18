import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {ITrack} from "../../types/treck";
import {Button, Grid, Card, TextField, Box} from "@mui/material";
import {useRouter} from "next/router";
import {Image} from "@mui/icons-material";


const TrackPage = () => {
    const router = useRouter();
    const track: ITrack =
        {
            "_id": "627d10b9c0fa2d18f96b3330",
            "name": "Track The King and the Jester",
            "text": "Test text",
            "listens": 3,
            "picture": "picture/60168698-391a-43ed-8196-c26eafb7a773.jpg",
            "audio": "audio/0278a983-e1a5-4f87-bb7e-420db57b2914.mp3",
            "comments": [],
        };

    return (
        <MainLayout>
            <Card className='single_track'>
                <Button variant="contained" size="medium" color="warning" onClick={() => router.push('/tracks')}>
                    Return to list
                </Button>
                <Grid container className='description_track_wrapper'>
                    {!track.picture ? <img src={track.picture} alt={track.name}/> : <Image color='primary'/>}
                    <div>
                        <h1>Track title: {track.name}</h1>
                        <h3>Track author: {track.artist}</h3>
                        <h3>Number of auditions: {track.listens}</h3>
                    </div>
                </Grid>
                <h2>Text:</h2>
                <p>{track.text}</p>
                <h2>Comments:</h2>
                <Grid container>
                    <TextField label='Your name' fullWidth/>
                    <TextField label='Your comment' fullWidth multiline rows={4} mt={3} />
                    <Button variant="contained" size="medium" color="warning" >Send</Button>
                </Grid>
                <div>
                    {
                        track.comments.map(comment =>
                          <div>
                             <h3>Author: {comment.username}</h3>
                             <div>Comment: {comment.text}</div>
                          </div>
                        )
                    }
                </div>
            </Card>
        </MainLayout>
    );
};


export default TrackPage;