import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Dog {
  bred_for: string;
  breed_group: string;
  height: Eight;
  id: number;
  image: Image;
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: Eight;
}
[];

export interface Eight {
  imperial: string;
  metric: string;
}

export interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface Dogs extends Array<Dog> {}

const initialState: {
  dogs: Dogs;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: any;
  currentRequestId: any;
} = {
  dogs: [],
  loading: "idle",
  error: null,
  currentRequestId: undefined,
};

export const fetchDogs = createAsyncThunk("dogs/fetchAll", async () => {
  const { data } = await axios.get<Dogs>(
    "https://api.thedogapi.com/v1/breeds?attach_breed=0",
    {
      headers: {
        "x-api-key": "087fc0cb-a3bc-4f4d-9de8-7b2cb36bcbc0",
      },
    }
  );
  return data;
});

const dogSlice = createSlice({
  initialState,
  name: "dogs",
  reducers: {},
  extraReducers: {
    [fetchDogs.pending.type]: (state, action) => {
      if ((state.loading = "idle")) {
        state.loading = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    },
    [fetchDogs.fulfilled.type]: (state, action) => {
      if (
        state.loading === "pending" &&
        state.currentRequestId === action.meta.requestId
      ) {
        state.loading = "idle";
        state.currentRequestId = undefined;
        state.dogs = action.payload;
      }
    },
  },
});

export default dogSlice.reducer;
