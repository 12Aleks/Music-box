import React, {FC} from 'react';
import {Container, Stepper, StepLabel, Step, Grid, Card} from "@mui/material";

interface StepWrapperProps {
  activeStep: number
}
const staps = [
    'Information about track',
    'Download the cover',
    'Download the track'
]
const StapWrapper: FC<StepWrapperProps> = ({activeStep, children}) => {
    return (
            <Container>
                <Stepper activeStep={activeStep}>
                    {staps.map((step, index) =>
                      <Step key={index} completed={activeStep > index}>
                          <StepLabel>{step}</StepLabel>
                      </Step>
                    )}
                </Stepper>
                <Grid container justifyContent='center' style={{margin: '70px 0', height: 270}}>
                   <Card style={{width: 600}}>
                       {children}
                   </Card>
                </Grid>
            </Container>
    );
};

export default StapWrapper;