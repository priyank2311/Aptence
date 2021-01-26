import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Doctor from './doctor.jpg';
import Dr from './dr1.jpg';
import Rupee from './rs.png';
import Call from './call.jpg';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        marginLeft: 50,
        marginRight: 50,
    }
}));

function Crysta() {
    const classes = useStyles();

    return (
        <div>
            <h1 style={{ marginLeft: 90, alignItems: 'center' }}>Why Crysta?</h1>
            <Grid container spacing={2} className={classes.grid}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <img src={Doctor} style={{ display: 'flex', width: '25%', borderRadius: '50%' }} />
                        <h4 style={{ marginTop: -85 }}>Global Medical Panel</h4>
                        <p style={{ marginLeft: 50 }}>Our Medical panel is always near
                        your location</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <img src={Dr} style={{ display: 'flex', width: '25%', borderRadius: '50%' }} />
                        <h4 style={{ marginTop: -85 }}>Experienced & Certified Doctors</h4>
                        <p style={{ marginLeft: 50 }}>Our trusted medical partners are
                        best in the world</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <img src={Rupee} style={{ display: 'flex', width: '25%', borderRadius: '50%' }} />
                        <h4 style={{ marginTop: -85 }}>Transparent Treatment Pricing</h4>
                        <p style={{ marginLeft: 50 }}>We offer the best prices for our
                        services with best results</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <img src={Call} style={{ display: 'flex', width: '25%', borderRadius: '50%' }} />
                        <h4 style={{ marginTop: -85 }}>Experienced & Certified Doctors</h4>
                        <p style={{ marginLeft: 50 }}>Our trusted medical partners are
                        best in the world</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Crysta;
