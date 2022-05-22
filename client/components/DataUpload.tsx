import React from 'react';
import {Grid, TextField} from "@mui/material";

const DataUpload = () => {
    return (
        <Grid container direction='column'>
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
        </Grid>
    );
};

export default DataUpload;