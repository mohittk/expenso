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
        <Card className={classes.root} style={{backgroundImage: 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)', color: 'white'}}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography style={{color: 'white'}} align="center" variant="h5">
                    total balance: paisa nhi hai
                </Typography>

                {/* <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px'}}>
                    Try saying: Add income for 100$ in category salary for Monday...
                </Typography> */}
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