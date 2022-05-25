import React, {FC} from 'react';
import {Grid, IconButton} from "@mui/material";
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {ITrack} from "../types/treck";
import TrackProgres from "./TrackProgres";

interface IPlayerProps {
    open: boolean
}

const Player: FC<IPlayerProps> = ({open = false}) => {
    const active = false;

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
            <div className={open && open ? 'open player' : 'player' }>
                <div className="play">
                    <IconButton onClick={e => e.stopPropagation()}>
                        {
                            active ? <Pause color='primary' fontSize="large"/> :
                                <PlayArrow color='primary' fontSize="large"/>
                        }
                    </IconButton>
                </div>
                <Grid container direction='column' className='track_description'>
                    <div className='track_title'>{track.name}</div>
                    <div className='track_autor'>{track.artist}</div>
                </Grid>
                <TrackProgres left={0} right={100} onChange={() => {
                }}/>
                <VolumeUp style={{marginLeft: 'auto'}}/>
                <TrackProgres left={0} right={100} onChange={() => {
                }}/>
            </div>

    );
};

export default Player;