import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl } from "../../components/BaseUrl";
import { AddressType } from "../../types/Address.types";
export const getAddress = createAsyncThunk("address/getAddress", async () => {
  return await fetch(`${BaseUrl}/address`)
    .then((res) => res.json())
    .then((data) => data as AddressType[]);
});
const initialState: AddressType[] = [];
const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAddress.fulfilled, (_state, action) => action.payload);
  },
});
export const addressActions = addressSlice.actions;
export default addressSlice.reducer;
