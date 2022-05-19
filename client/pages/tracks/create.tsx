import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import StapWrapper from "../../components/StapWrapper";
import {Card} from "@mui/material";

const Create = () => {
    return (
        <MainLayout>
            <Card className="create_track">
            <StapWrapper activeStep={1}>
                <h1>Download</h1>
            </StapWrapper>
            </Card>
        </MainLayout>
    );
};

export default Create;