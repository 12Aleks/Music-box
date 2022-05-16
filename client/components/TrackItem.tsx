import React, {FC} from 'react';
import {ITrack} from "../types/treck";
import {Card, IconButton} from "@mui/material";
import {Pause, PlayArrow} from "@mui/icons-material";

interface TrackItemProps {
    track: ITrack,
    active?: boolean
}

const TrackItem: FC<TrackItemProps> = ({track, active = false}) => {
    return (
        <Card className='track'>
            {track.name}
            <IconButton>

                {
                    active? <Pause color='primary' fontSize="large" /> : <PlayArrow color='primary' fontSize="large"/>

                }
            </IconButton>
        </Card>
    );
};

export default TrackItem;