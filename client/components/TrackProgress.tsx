import React, {FC, useEffect, useState} from 'react';

interface ITrackProgressProps {
    left: number,
    right: number,
    onChange: (e) => void,
    type?: boolean
}

let timeFormat = (value:number):string => {
    let date = new Date(0);
    date.setSeconds(value);
    return date.toISOString().substring(14, 19)
};

const percent =  (left: number, right: number):number => {
    return Math.ceil((left * 100) / right);
};


const TrackProgress: FC<ITrackProgressProps> = ({left, right, onChange, type}) => {
    const [currentTrackTime, setCurrentTrackTime] = useState<string>('');
    const [longTrack, setLongTrack] = useState<string>('');
    const [currentPosition, setCurrentPosition] = useState<number>(0);

    useEffect(() => {
        if(type){
            setCurrentPosition(percent(left, right));
            setCurrentTrackTime(timeFormat(left));
            setLongTrack(timeFormat(right));
        }
    }, [left, right]);





    return (
        <div className='track_progress'>
            <input
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
                className={`${type && 'progress'}`}
                style={type && {background: `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${currentPosition}%, #fff ${currentPosition}%, #fff 100%)`}}
            />
            { type? <div className='time'>{currentTrackTime} / {longTrack}</div>:<div className='volume'>{left} / {right}</div>}
        </div>
    );
};

export default TrackProgress;