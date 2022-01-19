import React, {useContext} from 'react';
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, Typography} from '@material-ui/core';
import {Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './style';

import { ExpenseTrackerContext} from '../../../context/context';

const List = () =>{
    const classes = useStyles();
    const {deleteTrans, transactions} = useContext(ExpenseTrackerContext);

   


    return (
        <>
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction)=>(
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem >
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                

                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText  primary={transaction.category} secondary={<Typography style={{color: 'white'}}>Rs {transaction.amount} - {transaction.date}</Typography>} />
                        <ListItemSecondaryAction > 
                            <IconButton edge="end" aria-label="delete" onClick={()=> deleteTrans(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>

            ))}

        </MUIList>

        </>
    )
}

export default List;