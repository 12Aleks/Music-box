import React, {FC} from 'react';
import {ITrack} from "../types/treck";
import {Card, Grid, IconButton} from "@mui/material";
import {Pause, PlayArrow, Delete, Image} from "@mui/icons-material";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";

interface TrackItemProps {
    track: ITrack,
    active?: boolean
}

const TrackItem: FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter();
    const {playTrack, pauseTrack, setActiveTrack} = useActions();

    const play = (e) => {
      e.stopPropagation();
      setActiveTrack(track);
      playTrack();
    };

    return (
        <Grid item xs={6} md={4} lg={3}>
            <Card className='track' onClick={() => router.push('/tracks/' + track._id)}>
                <div className='track_picture_wrapper'>
                    {
                        track.picture ?
                            <div className='track_picture' style={{backgroundImage: `url(${track.picture})`}}></div> :
                            <Image className='imageIcon'/>
                    }
                    <div className="play">
                        <IconButton onClick={play}>
                            {
                                active ? <Pause color='primary' fontSize="large"/> :
                                    <PlayArrow color='primary' fontSize="large"/>
                            }
                        </IconButton>
                    </div>
                </div>

                <Grid container direction='column' className='track_description'>
                    <div className='track_title'>{track.name}</div>
                    <div className='track_autor'>{track.artist}</div>
                </Grid>
                <Grid container  alignItems="center">
                {
                    !active && <div className='track_time'>03:34 / 05:00</div>
                }
                <IconButton className='delete' onClick={e => e.stopPropagation()}>
                    <Delete fontSize="medium"/>
                </IconButton>
                </Grid>
            </Card>
        </Grid>
    );
};

export default TrackItem;