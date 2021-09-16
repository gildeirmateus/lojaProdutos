import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";

const initialState = {
  products: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const removeProduct = (id) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  };

  const addProduct = (product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  };

  const editProduct = (product) => {
    dispatch({
      type: "EDIT_PRODUCT",
      payload: product,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        removeProduct,
        addProduct,
        editProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
