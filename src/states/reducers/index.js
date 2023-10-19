import { createSlice } from "@reduxjs/toolkit";

export const calSlice = createSlice({
  name: "cal",
  initialState: 100,
  reducers: {
    INC: (state, action) => {
      return (state += action.payload);
    },
    DEC: (state, action) => {
      return (state -= action.payload);
    },
    MUL: (state, action) => {
      return (state *= action.payload);
    },
    DIV: (state, action) => {
      return (state /= action.payload);
    },
  },
});

export const { INC, DEC, MUL, DIV } = calSlice.actions;
export default calSlice.reducer;
