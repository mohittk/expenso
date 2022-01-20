import React, {useContext, useEffect} from 'react';
import {Card, CardContent, CardHeader, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './style';
import Form from './form/form';
import List from './lists/list';
import {ExpenseTrackerContext} from '../../context/context';


const Main = () =>{
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);

    
   

    
    return(
        <>
        <Card className={classes.root} style={{backgroundImage: 'linear-gradient(315deg, #130f40 0%, #000000 74%)', color: 'white'}}>
            <CardHeader titleTypographyProps={{variant: 'h4'}}  style={{textAlign: 'center'}}title="Expense Tracker"  />
            <CardContent>
                <Typography style={{color: 'white'}} align="center" variant="h5">
                    Total Balance - Rs {balance}
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