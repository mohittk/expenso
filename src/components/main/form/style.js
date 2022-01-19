import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    radioGroup:{
        display:'flex',
        justifyContent: 'center',
        marginBottom: '-10px',
        color: 'white'
    },
    button:{
        marginTop: '20px',
        color: 'white',
        borderColor: 'white',
    },

    other:{
        color: 'white'
    }
}));