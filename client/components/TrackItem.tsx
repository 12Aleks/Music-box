import React, {FC, useState} from 'react';
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import {Pause, PlayArrow, Delete} from "@mui/icons-material";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";
import {SITE_NAME} from "../utils";
import notfound from "../assets/not-found.png";

interface TrackItemProps {
    track: ITrack,

}

const TrackItem: FC<TrackItemProps> = ({track}) => {
    const router = useRouter();
    const [active, setActive] = useState<boolean>(true);
    const {playTrack, pauseTrack, setActiveTrack} = useActions();

    const play = (e) => {
        e.stopPropagation();
      if(active)  {
          setActiveTrack(track);
          playTrack();
          setActive(true)
      }else{
          pauseTrack()
          setActive(false)
      }


    };

    return (
        <Grid item xs={6} md={4} lg={3}>
            <Card className='track' onClick={() => router.push('/tracks/' + track._id)}>
                <div className='track_picture_wrapper'>
                    {
                        track.picture && track.picture ?
                            <div className='track_picture' style={{backgroundImage: `url(${SITE_NAME}${track.picture})`}}></div> :
                            <div className='track_picture' style={{backgroundImage:  `url(${notfound.src})`}}></div>
                    }
                    <div className="play">
                        <IconButton onClick={play}>
                            {
                                !active ? <PlayArrow color='primary' fontSize="large"/> :
                                    <Pause color='primary' fontSize="large"/>
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