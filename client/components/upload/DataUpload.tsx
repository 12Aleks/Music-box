import React from 'react';
import {Grid, TextField} from "@mui/material";

const DataUpload = () => {
    return (
        <Grid container >
            <h1>First step</h1>
            <div className='form'>
                <TextField
                    label={'Track title'}
                />
                <TextField
                    label={'Track author'}
                />
                <TextField
                    label={'Track text'}
                    multiline
                    rows={3}
                />
            </div>
        </Grid>
    );
};

export default DataUpload;