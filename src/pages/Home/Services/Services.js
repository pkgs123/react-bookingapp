import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './../Service/Service';
import Covid from '../../../images/COVID-img.jpg';
import Onsite from '../../../images/Onsite-Healthcare.jpg';
import Preventive from '../../../images/Preventive-Healthcare.jpg';
import Wellness from '../../../images/Wellness-Management.jpg';

const services = [
    {
        name: 'COVID CARE MANAGEMENT',
        description: `Our COVID Care Management Solution ensures that your employees can easily access all solutions, from testing to treatment and vaccination, through a single window. Our highly qualified clinical staff are experienced in all aspects of Covid management and have addressed the needs of over 10,000 patients across the country. Employers benefit from access to relevant health data through secure Electronic Medical Records that allow them to minimise disruptions to business.`,
        img: Covid
    },
    {
        name: 'ONSITE HEALTHCARE',
        description: `Our onsite clinics offer high-quality preventive and curative medical care to your employees. Our solutions include diagnostics, consultation, tele-medicine, pharmacy, emergency management, referral management and wellness. Electronic Medical Records and analytics dashboard help organizations to assess the population health requirements and target appropriate interventions. Our clinics and processes are designed to the highest international standards and designed to deliver better health outcomes for your employees`,
        img: Onsite
    },
    {
        name: 'PREVENTIVE HEALTHCARE',
        description: `Our preventive health services identify at-risk employees through diagnostic health check-ups followed by clinical investigations. At-risk employees are enrolled in one of our managed care plans with diet counseling and fitness coaching to manage their health. Regular follow-ups by our on-roll clinical staff ensure adherence and make sustained health improvements. Intelligent dashboards and analytics help organizations assess and plan relevant health interventions leading to enhanced productivity and lower absenteeism.`,
        img: Preventive
    },
    {
        name: 'WELLNESS MANAGEMENT',
        description: `Our unique wellness program incentivizes employees to lead healthier lifestyles by inculcating and sustaining positive healthcare habits. Experienced professionals deliver a range of on-site and online wellness programs for your employee. We offer active wellness solutions like Yoga, Laughter Sessions and Zumba classes as well as inculcate positive lifestyle changes through Life Coaching, Nutritional Sessions and Counseling.`,
        img: Wellness
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;