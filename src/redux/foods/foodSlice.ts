import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl } from "../../components/BaseUrl";
import { FoodTypes } from "../../types/Food.types";
export const getFoods = createAsyncThunk("foods/getFoods", async () => {
  return await fetch(`${BaseUrl}/foods`)
    .then((res) => res.json())
    .then((data) => data as FoodTypes[]);
});
export const addToFavorite = createAsyncThunk(
  "foods/addToFavorite",
  async (id: string) => {
    return fetch(`${BaseUrl}/foods/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: true }),
    })
      .then((res) => res.json())
      .then(() =>
        fetch(`${BaseUrl}/foods`)
          .then((res) => res.json())
          .then((data) => data as FoodTypes[])
      );
  }
);
export const removeFavorite = createAsyncThunk(
  "foods/removeFavorite",
  async (id: string) => {
    return fetch(`${BaseUrl}/foods/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: false }),
    })
      .then((res) => res.json())
      .then(() =>
        fetch(`${BaseUrl}/foods`)
          .then((res) => res.json())
          .then((data) => data as FoodTypes[])
      );
  }
);
const initialState: FoodTypes[] = [];
const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFoods.fulfilled, (_state, action) => action.payload);
    builder.addCase(
      addToFavorite.fulfilled,
      (_state, action) => action.payload
    );
    builder.addCase(
      removeFavorite.fulfilled,
      (_state, action) => action.payload
    );
  },
});
export const foodActions = foodSlice.actions;
export default foodSlice.reducer;
