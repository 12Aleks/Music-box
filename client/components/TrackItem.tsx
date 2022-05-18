import React, {FC} from 'react';
import {ITrack} from "../types/treck";
import {Card, Grid, IconButton} from "@mui/material";
import {Pause, PlayArrow, Delete, Image} from "@mui/icons-material";
import {useRouter} from "next/router";

interface TrackItemProps {
    track: ITrack,
    active?: boolean
}

const TrackItem: FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()

    return (
        <Card className='track' onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton className='play' onClick={e => e.stopPropagation()}>
                {
                    active? <Pause color='primary' fontSize="large" /> : <PlayArrow color='primary' fontSize="large"/>
                }
            </IconButton>
            {
                !track.picture ? <img src={track.picture} alt={track._id}/>:<Image className='imageIcon'/>
            }
             <Grid container direction='column' className='track_description'>
                 <div className='track_title'>{track.name}</div>
                 <div className='track_autor'>{track.artist}</div>
             </Grid>
            {
                active && <div>03:34 / 05:00</div>
            }
            <IconButton className='delete' onClick={e => e.stopPropagation()}>
                <Delete fontSize="large"/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;