import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./style";
import {useState, useContext} from "react";
import {v4 as uuidv4} from 'uuid';
import {ExpenseTrackerContext} from  '../../../context/context'

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: new Date(),
}

const Form = () => {

    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);

    const {addTrans} = useContext(ExpenseTrackerContext);

    const createTrans = () =>{
      const transaction = { ...formData, amount:Number(formData.amount), id: uuidv4()}
      addTrans(transaction);
      setFormData(initialState);

    }

    console.log(formData);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2" gutterBottom>
            ....
          </Typography>{" "}
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value})}>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}> 
                    <MenuItem value="business">business</MenuItem>
                    <MenuItem value="salary">Salary</MenuItem>
                    
                </Select>
            </FormControl>

        </Grid>
        <Grid items xs={6}>
            <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({...formData, amount:e.target.value})}/>
        </Grid>
        <Grid items xs={6}>
        <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({...formData, date:e.target.value})} />
        </Grid>
        <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTrans}>
            Create
        </Button>
      </Grid>
    </>
  );
};

export default Form;
