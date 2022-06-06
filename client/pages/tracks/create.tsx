import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import StapWrapper from "../../components/StapWrapper";
import {Grid, Button} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DataUpload from "../../components/upload/DataUpload";
import FileUpload from "../../components/upload/FileUpload";
import SaveIcon from '@mui/icons-material/Save'


const Create = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)



    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1);
        }
        else {
            const formData = new FormData();
            formData.append('name', '')
        }
    };

    const back = () => {
        setActiveStep(prev => prev - 1)
    };

    return (
        <MainLayout>
            <div className="create_track">'
                <StapWrapper activeStep={activeStep} >
                    {
                        activeStep === 1 ? <FileUpload
                                setFile={setPicture}
                                accept='image/*'>
                                <h1>Second step</h1>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="warning"
                                    onClick={() => setLoading(!loading)}
                                    endIcon={<SaveIcon />}
                                >
                                    Upload song cover picture
                                </Button>
                            </FileUpload> :
                            activeStep === 2 ? <FileUpload
                                setFile={setAudio}
                                accept='audio/*'>
                                <h1>Third step</h1>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="warning"
                                    onClick={() => setLoading(!loading)}
                                    endIcon={<SaveIcon />}
                                >
                                    Upload an audio track
                                </Button>
                            </FileUpload> : <DataUpload/>
                    }
                </StapWrapper>
                <Grid container justifyContent='space-between'>
                    <Button variant="contained" size="large" color="warning" disabled={activeStep === 0} onClick={back}
                            startIcon={<ArrowBackIosIcon/>}>Back</Button>
                    <Button variant="contained" size="large" color="warning" onClick={next}
                            endIcon={<ArrowForwardIosIcon/>}>Next</Button>
                </Grid>
            </div>
        </MainLayout>
    );
};

export default Create;