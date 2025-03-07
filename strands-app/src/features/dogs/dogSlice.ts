//TASK 1 - Call API to retrieve the list of all dog breeds
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DogState {
  breeds: string[];
  imagesCount: { [key: string]: number };
  loading: boolean;
  error: string | null;
}

const initialState: DogState = {
  breeds: [],
  imagesCount: {},
  loading: false,
  error: null,
};

// Fetch all breeds
export const fetchBreeds = createAsyncThunk("dogs/fetchBreeds", async () => {
  const response = await axios.get("https://dog.ceo/api/breeds/list/all");
  return Object.keys(response.data.message);
});

//TASK 2 - Fetch images for each breed and count them
export const fetchImagesCount = createAsyncThunk(
  "dogs/fetchImagesCount",
  async (breeds: string[]) => {
    const counts: { [key: string]: number } = {};
    await Promise.all(
      breeds.map(async (breed) => {
        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
        counts[breed] = response.data.message.length;
      })
    );
    return counts;
  }
);

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
