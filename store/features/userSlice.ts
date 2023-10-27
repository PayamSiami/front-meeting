import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const AUTH_ENDPOINT =   `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth`;

export const registerUser = createAsyncThunk(
  "auth/register",
  async (values: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_ENDPOINT}/register`, {
        ...values,
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

const initialState = {
  status: "",
  error: "",
  user: {
    id: "",
    name: "",
    email: "",
    picture: "",
    status: "",
    token: "",
  },
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    logout: (state) => {
      state.status = "";
      state.error = "";
      state.user = {
        id: "",
        name: "",
        email: "",
        picture: "",
        status: "",
        token: "",
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeed";
        state.user = action.payload.user;
        state.error = "";
      })
      .addCase(registerUser.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const getUser = createSelector(
  (state) => state.user,
  (user: any) => user.status
);

export const { logout } = userSlice.actions;
export default userSlice.reducer;
