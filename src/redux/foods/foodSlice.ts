import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseUrl } from "../../components/BaseUrl";
import { FoodType } from "../../types/FoodType.types";
export const getFoodsList = createAsyncThunk("foods/getFoodsList", async () => {
  return fetch(`${BaseUrl}/types?_embed=foods`)
    .then((res) => res.json())
    .then((data) => data as FoodType[]);
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
        fetch(`${BaseUrl}/types?_embed=foods`)
          .then((res) => res.json())
          .then((data) => data as FoodType[])
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
        fetch(`${BaseUrl}/types?_embed=foods`)
          .then((res) => res.json())
          .then((data) => data as FoodType[])
      );
  }
);
const initialState: FoodType[] = [];
const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFoodsList.fulfilled, (_state, action) => action.payload);
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
