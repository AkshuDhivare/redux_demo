import { configureStore } from "@reduxjs/toolkit";
import calReducer from "./reducers/index";

const store = configureStore({
  reducer: {
    number: calReducer,
  },
});

export default store;
