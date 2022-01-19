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
import {ExpenseTrackerContext} from  '../../../context/context';
import {incomeCategories, expenseCategories} from '../../../constants/categories';

const dateFormat = (date) =>{
  const d = new Date(date);
  let month = `${d.getMonth()+1}`;
  const day = `${d.getDate()}`;
  const year = d.getFullYear();

  if(month.length < 2){
    month = `0${month}`;

  }
  if(day.length < 2){
    day = `0${day}`;
  }

  return [year, month, day].join('-');

}

const initialState = {
  amount: '',
  category: '',
  type: '',
  date: dateFormat(new Date()),
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

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

    console.log(formData);
  return (
    <>
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2" gutterBottom>
            ....
          </Typography>{" "}
        </Grid>
        <Grid item xs={6}>
            <FormControl  fullWidth>
                <InputLabel style={{color: 'white'}} >Type</InputLabel>
                <Select style={{color: 'white'}} value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value})}>
                    <MenuItem value="Income"  >Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'white'}}>Category</InputLabel>
                <Select style={{color: 'white'}} value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}> 
                {selectedCategories.map((c)=>{
                  return(
                  <MenuItem key={c.type} value={c.type}> {c.type}</MenuItem>
                  )
                })}
                    {/* <MenuItem value="business">business</MenuItem>
                    <MenuItem value="salary">Salary</MenuItem> */}
                    
                </Select>
            </FormControl>

        </Grid>
        <Grid  items xs={6} >
            <TextField InputLabelProps={{className: classes.other }}inputProps={{className: classes.other}} type="number" label="Amount"  fullWidth value={formData.amount} onChange={(e) => setFormData({...formData, amount:e.target.value})}/>
        </Grid>
        <Grid items xs={6}>
        <TextField InputLabelProps={{className: classes.other }}  inputProps={{className: classes.other}} type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({...formData, date:dateFormat(e.target.value)})} />
        </Grid>
        <Button className={classes.button} variant="outlined" fullWidth onClick={createTrans}>
            Create
        </Button>
      </Grid>
    </>
  );
};

export default Form;
