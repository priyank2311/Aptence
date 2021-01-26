import React from 'react';
import './Crysta';
import Crysta from './Crysta';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, styled } from '@material-ui/core';
import Fertility from './fertility.png';
import Surrogacy from './surrogacy.jpg'
import Infertility from './infertility.jpg';
import IUI from './IUI.png';

const useStyles = makeStyles((theme) => ({
    service: {
        width: '100%',
        margin: '5px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        borderRadius: '0px 20px',
        marginLeft: 50,
        marginRight: 50,
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
    },
}))

function Services() {
    const classes = useStyles();

    return (
        <div>
            <Crysta />

            <div style={{ backgroundImage: 'linear-gradient(to top, #accbee 0%, #e7f0fd 20%)' }}>
                <h1 style={{ marginLeft: 90, alignItems: 'center' }}>Our Services</h1>
                <p style={{ marginLeft: 90, alignItems: 'center', fontSize: 20 }}>
                    Our services are designed with one thing in mind - You
                </p>
                <Grid className={classes.service} container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Paper className={classes.paper}>
                            <img src={Fertility} style={{ display: 'block', width: '100%' }} />
                            <h3>In Vitro Fertility</h3>
                        </Paper>
                        <p style={{ margin: 60 }}>
                            From basic infertility
                            assessment to transfer of
                            fertilized embryos, we
                            provide IVF treatments
                            with additional
                            procedures like ICSI, TESA,
                            PESA, and others.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper className={classes.paper}>
                            <img src={Surrogacy} style={{ display: 'block', width: '100%' }} />
                            <h3>Surrogacy</h3>
                        </Paper>
                        <p style={{ margin: 60 }}>
                            We offer exemplary
                            surrogacy treatments to
                            childless couples. We help
                            you find the perfect
                            surrogates and donors for
                            you under the guidance of
                            top surrogacy doctors.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper className={classes.paper}>
                            <img src={Infertility} style={{ display: 'block', width: '100%' }} />
                            <h3>Infertility</h3>
                        </Paper>
                        <p style={{ margin: 60 }}>
                            We are best known for
                            providing specialized care
                            and treatment to couples
                            experiencing male
                            and female infertility
                            disorders by examining the
                            exact cause of infertility.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper className={classes.paper}>
                            <img src={IUI} style={{ display: 'block', width: '100%' }} />
                            <h3 style={{ marginTop: -2 }}>Intrauterine Insemination (IUI)</h3>
                        </Paper>
                        <p style={{ margin: 60 }}>
                            We stand out among
                            others for providing topnotch IUI treatments with
                            success rates to
                            childless couples in order
                            to increase their chances
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Services;
