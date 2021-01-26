import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Tab, Tabs } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import Crysta from './crysta.png';
import Forms from './Forms';

const useStyles = makeStyles((theme) => ({
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));

function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Grid container spacing={3} className={classes.grid} >
                <Grid item xs={12} md={12}>
                    <Tabs
                        //value={value}
                        //onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        className={classes.tab}
                    >
                        <img src={Crysta} alt='' width='5%' />
                        <Tab label="Home" style={{ fontWeight: 600 }} />
                        <Tab label="Our Services" style={{ fontWeight: 600 }} />
                        <Tab label="About Us" style={{ fontWeight: 600 }} />
                        <CallIcon style={{ color: "#DC143C", marginTop: 20 }} />
                        <Tab label="+91 893 893 5353" style={{ fontWeight: 600, color: "#DC143C" }} />
                    </Tabs>
                </Grid>
            </Grid >
            <Forms />
        </div>
    )
};

export default NavBar;
