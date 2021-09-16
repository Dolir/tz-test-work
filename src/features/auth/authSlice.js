import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  token: {
    access: localStorage.getItem("access-token"),
    refresh: localStorage.getItem("refresh-token"),
  },
  isAuthenticated: false,
  isLoading: false,
  user: null,
  msg: null,
};
export const loadUser = createAsyncThunk("auth/loadUser", async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  };
  const response = await axios.get(
    "https://api.doover.tech/api/users/me/",

    config
  );

  return response.data;
});
export const updateUserSettings = createAsyncThunk(
  "auth/updateUserSettings",
  async (settings) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    };
    const response = await axios.put(
      "https://api.doover.tech/api/users/settings/",
      settings,
      config
    );

    return response.data;
  }
);
export const login = createAsyncThunk("auth/login", async (user) => {
  const response = await axios
    .post("https://api.doover.tech/api/token/", user)
    .catch((e) => e.response);

  return { data: response.data, status: response.status };
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.msg = null;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = false;

      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.status >= 400) {
          state.msg = action.payload.data.detail;
        } else {
          localStorage.setItem("access-token", action.payload.data.access);
          localStorage.setItem("refresh-token", action.payload.data.refresh);
          return {
            ...state,
            token: action.payload.data,
            isAuthenticated: true,
            isLoading: false,
          };
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.token = null;
        state.isAuthenticated = false;
        state.isLoading = false;

        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isLoading = false;
      });
  },
});

export const { clearError, logout } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default authSlice.reducer;
