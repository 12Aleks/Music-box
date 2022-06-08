import React, {FC} from 'react';
import {ITrack} from "../types/track";
import {Grid} from "@mui/material";
import TrackItem from "./TrackItem";

interface TrackListProps{
    tracks: ITrack[]
}

const TrackList:FC<TrackListProps> = ({tracks}) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    tracks.map(track =>
                      <TrackItem track={track} key={track._id}/>
                    )
                }
        </Grid>
    );
};

export default TrackList;