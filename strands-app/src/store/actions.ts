import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBreedsAPI, fetchImagesCountAPI } from "./dogsApi";

// Async thunk to fetch breeds
export const fetchBreeds = createAsyncThunk("dogs/fetchBreeds", async () => {
  return await fetchBreedsAPI();
});

// Async thunk to fetch images count
export const fetchImagesCount = createAsyncThunk(
  "dogs/fetchImagesCount",
  async (breeds: string[]) => {
    return await fetchImagesCountAPI(breeds);
  }
);
