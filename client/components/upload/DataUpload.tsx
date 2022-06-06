import React from 'react';
import {Grid, TextField} from "@mui/material";
import {useInput} from "../../hooks/useInput";


const DataUpload = () => {

    const name = useInput('');
    const artist = useInput('');
    const text = useInput('');

    return (
        <Grid container >
            <h1>First step</h1>
            <div className='form'>
                <TextField
                    {...name}
                    label={'Track title'}
                />
                <TextField
                    {...artist}
                    label={'Track author'}
                />
                <TextField
                    {...text}
                    label={'Track text'}
                    multiline
                    rows={3}
                />
            </div>
        </Grid>
    );
};

export default DataUpload;