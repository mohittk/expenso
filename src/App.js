import React from 'react';
import {Grid} from '@material-ui/core';
import Details from './components/details/details';
import useStyles from './styles';
import Main from './components/main/main';
import ('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Jockey+One&family=Merriweather+Sans:wght@500&family=Poppins:wght@300&family=Ruslan+Display&display=swap');

const App = () =>{
    const classes = useStyles();
    return(
        <>
        <div className="title">
            <p style={{color: 'white', fontSize: '5rem', textAlign: 'center', fontFamily: 'Azeret Mono'}}>E<span style={{color: 'yellow'}}>x</span>p<span style={{color: 'cyan'}}>e</span>n$<span style={{color: '	#FF1493'}}>o</span></p>
        </div>
        <div>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height : '60vh'}} >
            <Grid item xs={12} sm={4}>
                <Details title="Income" />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Main />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Details title="Expense" />
            </Grid>
            </Grid>

        </div>
        </>
    )
}

export default App;

