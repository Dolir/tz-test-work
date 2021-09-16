import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  categories: [],
  items: [],
  isLoading: false,
};

export const getItemsByCategory = createAsyncThunk(
  "items/getItemsByCategory",
  async (data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.get(
      `https://api.doover.tech/api/products?category=${data.categoryId}`,
      config
    );

    return response.data;
  }
);
export const getItemsBySearchTerm = createAsyncThunk(
  "items/getItemsBySearchTerm",
  async (data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.get(
      `https://api.doover.tech/api/products?search=${data.searchTerm}`,
      config
    );

    return response.data;
  }
);
export const getCategories = createAsyncThunk(
  "items/getCategories",
  async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      "https://api.doover.tech/api/products/categories/",
      config
    );

    return response.data;
  }
);

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    clearItems: (state) => {
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(getItemsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItemsByCategory.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getItemsBySearchTerm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItemsBySearchTerm.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      });
  },
});

export const { clearItems } = itemsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default itemsSlice.reducer;
