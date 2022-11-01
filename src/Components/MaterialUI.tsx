import React from 'react';
import { Button, makeStyles, Typography, Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles({
    btnStyle: {
        background:"green",
        padding:"3px 50px"
    },
    typoStyle: {
        color:"blue"
    },
    paperStyle: {
        backgroundColor:"orange",
        height:"50px",
    },
});

const MaterialUI:React.FC = () => {
    const classes = useStyles();
    return (
        <div className=''>
            <Typography 
                // className={classes.typoStyle}
                color='secondary' 
                variant='h1' 
                align='center'>
                Hello React
            </Typography>

            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paperStyle}>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paperStyle}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paperStyle}>xs=6</Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>                
                <Grid item xs={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>                
                <Grid item xs={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>                
                <Grid item xs={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>
            </Grid>

            <Button className= {classes.btnStyle} variant='contained' color='primary'>touch</Button>
        </div>
    )
}

export default MaterialUI