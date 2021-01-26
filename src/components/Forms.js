import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField } from '@material-ui/core';
import Services from './Services';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        justifyContent: 'center',
    },
    upper: {
        display: 'contents',
        flexWrap: 'wrap-reverse',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 900,
    },
    roots: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    }
}));

function Forms() {
    const classes = useStyles();

    return (
        <div style={{ backgroundImage: 'linear-gradient(to top, #fad0c4 20%, #ffd1ff 50%)' }}>
            <Grid container spacing={2} className={classes.form}>
                <Grid className={classes.upper} item xs={10} md={12}>
                    <img src='https://cdn.shopify.com/s/files/1/1407/3324/articles/Blog-baby-overheating_3_1300x@2x.jpg?v=1542056180' alt='' style={{ width: '100%' }} />
                    <Grid xs={6} md={12}>
                        <h1>World Class</h1>
                        <h1>Fertility Treatments</h1>
                        <h3>Because your fertility health care is our priority</h3>
                    </Grid>
                </Grid>
                <Grid item xs={5} md={12}>
                    <form className={classes.roots} noValidate autoComplete="off">
                        <TextField id="filled-basic" label="Name" variant="filled" style={{ backgroundColor: '#ffffff', margin: 8 }} />
                        <TextField id="filled-basic" label="Phone No" variant="filled" style={{ backgroundColor: '#ffffff', margin: 8 }} />
                        <TextField id="filled-basic" InputLabelProps={{ className: 'label' }} label="Appointment" variant="filled" style={{ backgroundColor: '#FF0000', color: '#ffffff', margin: 8 }} />
                    </form>
                </Grid>
            </Grid>
            <Services />
        </div >
    )
}

export default Forms;
