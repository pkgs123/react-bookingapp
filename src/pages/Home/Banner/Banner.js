import React from 'react';
import Grid from '@mui/material/Grid';
import HomeBanner from '../../../images/Home-Banner.jpg';
import bg from '../../../images/bg.png';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';


const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box sx={{mt:"75px"}}>
                        <Typography variant="h4">
                        HEALTHCARE WHICH WORKS BETTER FOR
                        YOU AND YOUR EMPLOYEES <br />
                        <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                        We believe that healthy employees make for a positive and productive workplace and a healthier bottom line.

HCL Healthcare helps progressive organizations deliver a world-class healthcare and wellness experience through a wide range of onsite and online solutions. 

Today, we serve over 250000 individuals with a reach over 550+ cities PAN India.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '664px',height:'306px' }} src={HomeBanner} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;