import React, {FC} from 'react';

interface ITrackProgressProps {
    left: number;
    right: number;
    onChange: (e) => void
}

const TrackProgres: FC<ITrackProgressProps> = ({left, right, onChange}) => {
    return (
        <div className='track_progress'>
            <input
                type="range"
                min={left}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>{left} / {right}</div>
        </div>
    );
};

export default TrackProgres;