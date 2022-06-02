import React, {FC, useEffect} from 'react';

interface ITrackProgressProps {
    left: number,
    right: number,
    onChange: (e) => void,
    type?: boolean
}

let timeFormat = (value:number):string => {
    let date = new Date(0);
    date.setSeconds(value);
    return date.toISOString().substring(11, 19)
};


const TrackProgres: FC<ITrackProgressProps> = ({left, right, onChange, type}) => {

    useEffect(() => {
        if(type){
            let currentTrackTime = timeFormat(left);
            let longTrack = timeFormat(right);
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
            />
            <div>{left} / {right}</div>
        </div>
    );
};

export default TrackProgres;