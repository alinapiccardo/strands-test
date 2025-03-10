import { createSlice } from "@reduxjs/toolkit";
import { fetchBreeds, fetchImagesCount } from "./actions";
import { DogState } from "./types";

const initialState: DogState = {
  breeds: [],
  imagesCount: {},
  loading: false,
  error: null,
};

const dogSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.breeds = action.payload;
        state.loading = false;
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.error = action.error.message || "Error fetching breeds";
        state.loading = false;
      })
      .addCase(fetchImagesCount.fulfilled, (state, action) => {
        state.imagesCount = action.payload;
      });
  },
});

export default dogSlice.reducer;
