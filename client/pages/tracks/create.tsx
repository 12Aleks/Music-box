import React, {useEffect, useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Grid, Button, TextField} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FileUpload from "../../components/upload/FileUpload";
import SaveIcon from '@mui/icons-material/Save'
import {useInput} from "../../hooks/useInput";
import axios from "axios";
import {useRouter} from "next/router";


const Create = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [activeButton, setActiveButton] = useState<boolean>(true);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const name = useInput('');
    const artist = useInput('');
    const text = useInput('');
    const router = useRouter();


    useEffect(() => {
             if(name.value.length >= 2 && artist.value.length >= 2 && text.value.length  >= 10 ) setActiveButton(false);
             else setActiveButton(true)
    }, [name, artist, text]);


    console.log(picture)

    useEffect(() => {
        picture && picture.name ? setActiveButton(false) :setActiveButton(true);
        }, [picture]);

    useEffect(() => {
        audio && audio.name ? setActiveButton(false) :setActiveButton(true);
    }, [audio]);


    const next = async () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1);
            setActiveButton(true);
        } else {
            let formData = new FormData();
            formData.append('name', name.value);
            formData.append('text', text.value);
            formData.append('artist', artist.value);
            formData.append('picture', picture);
            formData.append('audio', audio);

           await axios.post('http://localhost:5000/tracks', formData)
                .then(resp => router.push('/tracks'))
                .catch(e => console.log(e))
        }
    };

    const back = () => {
        setActiveStep(prev => prev - 1)
    };

    return (
        <MainLayout>
            <div className="create_track">
                <StepWrapper activeStep={activeStep}>
                    {activeStep === 0 && <Grid container>
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
                    }
                    {
                      activeStep === 1 && <FileUpload setFile={setPicture} accept="image/*">
                            <h1>Second step</h1>
                            <Button
                                variant="contained"
                                size="large"
                                color="warning"
                                // onClick={() => setLoading(!loading)}
                                endIcon={<SaveIcon/>}
                            >
                                Upload song cover picture
                            </Button>
                        </FileUpload>
                    }

                    {
                        activeStep === 2 && <FileUpload setFile={setAudio} accept="audio/*">
                            <h1>Third step</h1>
                            <Button
                                variant="contained"
                                size="large"
                                color="warning"
                                // onClick={() => setLoading(!loading)}
                                endIcon={<SaveIcon/>}
                            >
                                Upload an audio track
                            </Button>
                        </FileUpload>
                    }


                </StepWrapper>
                <Grid container justifyContent='space-between'>
                    <Button variant="contained" size="large" color="warning" disabled={activeStep === 0} onClick={back}
                            startIcon={<ArrowBackIosIcon/>}>Back</Button>
                    <Button variant="contained" size="large" color="warning" onClick={next}
                            endIcon={<ArrowForwardIosIcon/>} disabled={activeButton}>Next</Button>
                </Grid>
            </div>
        </MainLayout>
    );
};

export default Create;