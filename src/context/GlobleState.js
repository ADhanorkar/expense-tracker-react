import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Initial State
const initialState = {
  transactions: [],
};

//Create Context
export const GlobalContext = React.createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransactionAction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransactionAction = (text, amount) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount,
    };
    dispatch({
      type: "ADD_TRANSACTION",
      payload: newTransaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransactionAction,
        deleteTransactionAction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
