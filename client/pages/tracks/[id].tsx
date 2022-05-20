import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {ITrack} from "../../types/treck";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {Image} from "@mui/icons-material";


const TrackPage = () => {
    const router = useRouter();
    const track: ITrack =
        {
            "_id": "627d5037514a04d61ba4433c",
            "name": "Track The King and the Jester",
            "artist": "The King and the Jester",
            "text": "Test text",
            "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjD9r-GHryXy_6RveidOLdz4_MeFrFIIlwA&usqp=CAU",
            "audio": "audio/3f776ce2-91d7-4383-b235-b776f20fd503.mp3",
            "comments": [],
        };

    return (
        <MainLayout>
            <div className='single_track'>
                <Button variant="contained" size="medium" color="warning" onClick={() => router.push('/tracks')}>
                    Return to list
                </Button>
                <Grid container className='description_track_wrapper'>
                    {track.picture ?  <div className='track_picture' style={{backgroundImage: `url(${track.picture})`}}></div> : <Image color='primary'/>}
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
            </div>
        </MainLayout>
    );
};


export default TrackPage;