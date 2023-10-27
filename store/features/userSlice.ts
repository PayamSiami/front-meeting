import { createSelector, createSlice } from "@reduxjs/toolkit";

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
});

export const getLoadingAuth = createSelector(
  (state) => state.user,
  (user: any) => user.status
);

export const { logout } = userSlice.actions;
export default userSlice.reducer;
