import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import StapWrapper from "../../components/StapWrapper";
import {Grid, Button} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DataUpload from "../../components/DataUpload";
import FileUpload from "../../components/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState<number>(0);

    const next = () => {
        if (activeStep !== 2) setActiveStep(prev => prev + 1)
    };

    const back = () => {
       setActiveStep(prev => prev - 1)
    };

    return (
        <MainLayout>
            <div className="create_track">
                <StapWrapper activeStep={activeStep}>
                    {
                        activeStep  === 1 ? <FileUpload file={''} setFile={() => ({})}/> : activeStep === 2 ? <h1>Stap 3</h1> : <DataUpload/>
                    }
                </StapWrapper>
                <Grid container justifyContent='space-between'>
                    <Button variant="contained" size="medium" color="warning" disabled={activeStep === 0} onClick={back}
                            startIcon={<ArrowBackIosIcon/>}>Back</Button>
                    <Button variant="contained" size="medium" color="warning" onClick={next}
                            endIcon={<ArrowForwardIosIcon/>}>Next</Button>
                </Grid>
            </div>
        </MainLayout>
    );
};

export default Create;