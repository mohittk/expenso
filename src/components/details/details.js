import React from "react";
import {Card, CardHeader, CardContent, Typography} from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from './style';
import useTransaction from '../../useTransaction';


const Details = ({title}) =>{

    const classes = useStyles();
    const {total, chartData} = useTransaction(title);


    return(
    <Card className={title === 'Income' ? classes.income : classes.expense} style={{backgroundImage: 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)'}}>
        <CardHeader style={{color: 'white'}} title={title} />
        <CardContent>
            <Typography style={{color: 'white'}} variant="h5">Rs {total}</Typography>
            {/* <Doughnut data= {chartData} /> */}
        </CardContent>
    </Card>

    )
}

export default Details;

// background-color: #000000;
// background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);

// background-color: #000000;
// background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);

