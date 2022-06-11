import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {Image} from "@mui/icons-material";
import {GetServerSideProps} from "next";
import axios from "axios";
import {SITE_NAME} from "../../utils";
import {useInput} from "../../hooks/useInput";
import {ITrack} from "../../types/track";


const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack);
    const router = useRouter();
    const username = useInput('');
    const text = useInput('');

    const addComment = async() => {
        try{
            const response = await axios.post(`${SITE_NAME}tracks/comment`, {
                username: username.value,
                text: text.value,
                trackId: track._id
            })

            setTrack({...track, comments: [...track.comments, response.data ]});
        }catch(e){
          console.log(e)
        }
    };

    return (
        <MainLayout title={track.name + " - " + track.artist + " - Music box"}
        keywords={"music, artist," + track.name +", " + track.artist}
        >
            <div className='single_track'>
                <Button variant="contained" size="medium" color="warning" onClick={() => router.push('/tracks')}>
                    Return to list
                </Button>
                <Grid container className='description_track_wrapper'>
                    {track.picture ?  <div className='track_picture' style={{backgroundImage: `url(${SITE_NAME}${track.picture})`}}></div> : <Image color='primary'/>}
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
                    <TextField {...username} label='Your name' fullWidth/>
                    <TextField {...text}  label='Your comment' fullWidth multiline rows={4} style={{marginTop: '15px'}} />
                    <Button
                        variant="contained"
                        size="medium"
                        color="warning"
                        onClick={addComment}
                    >Send</Button>
                </Grid>
                <div>
                    {
                        track.comments.map(comment =>
                          <div className='comment '>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id);
    return {
        props: {
            serverTrack: response.data
        }
    }
}