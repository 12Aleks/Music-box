import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import StapWrapper from "../../components/StapWrapper";

const Create = () => {
    return (
        <MainLayout>
            <StapWrapper activeStep={1}>
                <h1>Download</h1>
            </StapWrapper>
        </MainLayout>
    );
};

export default Create;