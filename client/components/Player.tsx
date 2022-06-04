import React, {FC, useEffect} from 'react';
import {Grid, IconButton} from "@mui/material";
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import TrackProgress from "./TrackProgress";
import {useTypedSelector} from "../hooks/useTypesSelector";
import {useActions} from "../hooks/useActions";
import {SITE_NAME} from "../utils";


interface IPlayerProps {
    open: boolean
}

let audio;

const Player: FC<IPlayerProps> = ({open = false}) => {
    const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player);
    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration} = useActions();

    useEffect(() => {
        if(!audio) audio = new Audio();
        else setAudio(); play();
    }, [active]);

    const setAudio = () => {
        if(active){
            //ukazatel na to czto nuzno proigrywat
            audio.src = `${SITE_NAME}${active.audio}`;
            //izmenenie zwuka
            audio.volume = volume / 100;
            //track long time
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration));
            };
            //funkcija srobatywajuszaja na izmenenije wremeni
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime));
            };
        }
    };


    const play = () => {
        if (pause) {
            playTrack();
            audio.play()
        } else {
            pauseTrack();
            audio.pause()
        }
    };

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100;
        setVolume(Number(e.target.value))
    };

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value);
        setCurrentTime(Number(e.target.value))
    };

    if(!active){
        return null
    }

    return (
            <div className={open && open ? 'open player' : 'player' }>
                <div className="play">
                    <IconButton onClick={play}>
                        {
                            pause ? <Pause color='primary' fontSize="large"/> :
                                <PlayArrow color='primary' fontSize="large"/>
                        }
                    </IconButton>
                </div>
                <Grid container direction='column' className='track_description'>
                    <div className='track_title'>{active?.name}</div>
                    <div className='track_autor'>{active?.artist}</div>
                </Grid>
                <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} type={true}/>
                <VolumeUp style={{marginLeft: 'auto'}}/>
                <TrackProgress left={volume} right={100} onChange={changeVolume} />
            </div>

    );
};

export default Player;