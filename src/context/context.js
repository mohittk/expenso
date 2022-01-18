import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) =>{

    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTrans = (id) =>{
        dispatch({type: 'DELETE_TRANSACTION', payload: id});

    }

    const addTrans = (transaction) => {
        dispatch({type: 'ADD_TRANSACTION', payload: transaction});

    }

   


    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTrans,
            addTrans,
            transactions
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}