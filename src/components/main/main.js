import React, {useContext} from 'react';
import {Card, CardContent, CardHeader, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './style';
import Form from './form/form';
import List from './lists/list';
import {ExpenseTrackerContext} from '../../context/context';

const Main = () =>{
    const classes = useStyles();
    const globalState = useContext(ExpenseTrackerContext);
    console.log(globalState);
    
    return(
        <>
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">
                    total balance 100$
                </Typography>

                <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px'}}>
                    Try saying: Add income for 100$ in category salary for Monday...
                </Typography>
                <Divider />
                <Form />

            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <List />
                </Grid>
            </CardContent>
        </Card>
        </>
    )


}

export default Main;